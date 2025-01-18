/*
  # Email Confirmation and User Setup Trigger
  
  1. Changes
    - Creates trigger function to handle user setup after email confirmation
    - Sets up user preferences and quiz progress automatically
    - Uses marketing consent from signup metadata
  
  2. Security
    - Function runs with SECURITY DEFINER to ensure proper permissions
    - Only triggers when email is confirmed
*/

-- Create function to handle user setup after email confirmation
CREATE OR REPLACE FUNCTION handle_user_confirmation()
RETURNS TRIGGER AS $$
BEGIN
  -- Only proceed if email was just confirmed
  IF NEW.email_confirmed_at IS NOT NULL AND OLD.email_confirmed_at IS NULL THEN
    -- Create user preferences
    INSERT INTO public.user_preferences (
      id,
      marketing_consent,
      newsletter_consent
    ) VALUES (
      NEW.id,
      COALESCE((NEW.raw_app_meta_data->>'marketing_consent')::boolean, false),
      COALESCE((NEW.raw_app_meta_data->>'marketing_consent')::boolean, false)
    ) ON CONFLICT (id) DO NOTHING;

    -- Initialize quiz progress
    INSERT INTO public.quiz_progress (
      user_id,
      questions_completed,
      total_attempts,
      correct_answers
    ) VALUES (
      NEW.id,
      0,
      0,
      0
    ) ON CONFLICT (user_id) DO NOTHING;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger on auth.users table
DROP TRIGGER IF EXISTS on_user_confirmation ON auth.users;
CREATE TRIGGER on_user_confirmation
  AFTER UPDATE ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION handle_user_confirmation();
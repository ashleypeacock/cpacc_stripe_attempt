/*
  # Database Functions and Triggers
  
  Creates utility functions and triggers for:
  - Automatic timestamp updates
  - Data cleanup
  - Error handling
  - Security event logging
*/

-- Drop existing trigger first
DROP TRIGGER IF EXISTS update_quiz_progress_updated_at ON quiz_progress;

-- Create or replace updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for quiz_progress
CREATE TRIGGER update_quiz_progress_updated_at
  BEFORE UPDATE ON quiz_progress
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create cleanup function
CREATE OR REPLACE FUNCTION cleanup_old_attempts()
RETURNS void AS $$
BEGIN
  DELETE FROM login_attempts
  WHERE attempted_at < now() - INTERVAL '24 hours';
END;
$$ LANGUAGE plpgsql;

-- Create error message function
CREATE OR REPLACE FUNCTION get_friendly_error_message(error_code text)
RETURNS text AS $$
BEGIN
  CASE error_code
    WHEN '23505' THEN 
      RETURN 'An account with this email address already exists. Please sign in or use a different email.';
    WHEN 'P0001' THEN
      RETURN 'Your session has expired. Please sign in again.';
    WHEN '23503' THEN
      RETURN 'Unable to complete this action. Please try again.';
    WHEN '42501' THEN
      RETURN 'You do not have permission to perform this action.';
    ELSE
      RETURN 'An unexpected error occurred. Please try again.';
  END CASE;
END;
$$ LANGUAGE plpgsql;

-- Create security event function
CREATE OR REPLACE FUNCTION record_security_event(
  p_user_id UUID,
  p_event_type TEXT,
  p_description TEXT,
  p_ip_address TEXT DEFAULT NULL,
  p_user_agent TEXT DEFAULT NULL
) RETURNS void AS $$
BEGIN
  INSERT INTO security_events (
    user_id,
    event_type,
    description,
    ip_address,
    user_agent
  ) VALUES (
    p_user_id,
    p_event_type,
    p_description,
    p_ip_address,
    p_user_agent
  );
END;
$$ LANGUAGE plpgsql;
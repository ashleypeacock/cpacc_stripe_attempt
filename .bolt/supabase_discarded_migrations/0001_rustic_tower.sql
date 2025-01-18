/*
  # Add Error Logging and Security Features

  1. New Tables
    - `error_logs`: Store application errors
    - `auth_attempts`: Track authentication attempts

  2. Security
    - Enable RLS on all tables
    - Add policies for secure access
    - Add functions for error logging and auth tracking

  3. Cleanup
    - Add function to remove old auth attempts
*/

-- Create tables first
CREATE TABLE IF NOT EXISTS error_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  error_code text,
  error_message text NOT NULL,
  stack_trace text,
  context jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS auth_attempts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  ip_address text,
  user_agent text,
  success boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE error_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE auth_attempts ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can read their own errors" ON error_logs;
DROP POLICY IF EXISTS "Admins can read auth attempts" ON auth_attempts;

-- Create policies
CREATE POLICY "Users can read their own errors"
  ON error_logs
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can read auth attempts"
  ON auth_attempts
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT id FROM auth.users WHERE email IN (
      SELECT email FROM auth.users WHERE raw_user_meta_data->>'role' = 'admin'
    )
  ));

-- Create functions
CREATE OR REPLACE FUNCTION cleanup_old_auth_attempts()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM auth_attempts
  WHERE created_at < NOW() - INTERVAL '7 days';
END;
$$;

CREATE OR REPLACE FUNCTION log_error(
  p_user_id uuid,
  p_error_code text,
  p_error_message text,
  p_stack_trace text DEFAULT NULL,
  p_context jsonb DEFAULT NULL
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_error_id uuid;
BEGIN
  INSERT INTO error_logs (
    user_id,
    error_code,
    error_message,
    stack_trace,
    context
  ) VALUES (
    p_user_id,
    p_error_code,
    p_error_message,
    p_stack_trace,
    p_context
  )
  RETURNING id INTO v_error_id;
  
  RETURN v_error_id;
END;
$$;

CREATE OR REPLACE FUNCTION record_auth_attempt(
  p_email text,
  p_ip_address text,
  p_user_agent text,
  p_success boolean
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  v_attempt_id uuid;
BEGIN
  INSERT INTO auth_attempts (
    email,
    ip_address,
    user_agent,
    success
  ) VALUES (
    p_email,
    p_ip_address,
    p_user_agent,
    p_success
  )
  RETURNING id INTO v_attempt_id;
  
  -- Clean up old attempts if we have too many
  IF (SELECT count(*) FROM auth_attempts) > 10000 THEN
    PERFORM cleanup_old_auth_attempts();
  END IF;
  
  RETURN v_attempt_id;
END;
$$;
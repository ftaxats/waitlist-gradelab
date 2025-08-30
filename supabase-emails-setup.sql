-- Create emails table for welcome emails
CREATE TABLE IF NOT EXISTS emails (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  to_email TEXT NOT NULL,
  subject TEXT NOT NULL,
  html_content TEXT,
  text_content TEXT,
  from_email TEXT DEFAULT 'noreply@gradelab.io',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'sent', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  sent_at TIMESTAMP WITH TIME ZONE,
  error_message TEXT
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_emails_status ON emails(status);
CREATE INDEX IF NOT EXISTS idx_emails_created_at ON emails(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE emails ENABLE ROW LEVEL SECURITY;

-- Create policy to allow service role to insert emails
CREATE POLICY "Service role can insert emails" ON emails
  FOR INSERT TO service_role
  WITH CHECK (true);

-- Create policy to allow service role to read emails
CREATE POLICY "Service role can read emails" ON emails
  FOR SELECT TO service_role
  USING (true);

-- Create policy to allow service role to update emails
CREATE POLICY "Service role can update emails" ON emails
  FOR UPDATE TO service_role
  USING (true);

-- Create a function to send emails (this will be used by Supabase Edge Functions)
CREATE OR REPLACE FUNCTION send_welcome_email()
RETURNS TRIGGER AS $$
BEGIN
  -- This function will be called by a Supabase Edge Function
  -- The actual email sending logic will be in the Edge Function
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically call the function when a new email is inserted
CREATE TRIGGER trigger_send_welcome_email
  AFTER INSERT ON emails
  FOR EACH ROW
  EXECUTE FUNCTION send_welcome_email();

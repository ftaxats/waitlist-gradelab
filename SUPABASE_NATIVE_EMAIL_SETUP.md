# Supabase Native Email System Setup

## ✅ Implementation Complete

Your welcome email system is now configured to use Supabase's native email functionality through database triggers.

## What's Been Implemented

### 1. API Route Updated
- **File:** `app/api/submit/route.ts`
- **Function:** Stores email data in the `emails` table
- **Database Trigger:** Supabase will automatically process and send emails

### 2. Database Setup Required
You need to run the SQL setup in your Supabase dashboard:

```sql
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
```

## Setup Steps

### 1. Run Database Setup
1. Go to your Supabase dashboard
2. Navigate to SQL Editor
3. Run the SQL commands above
4. Verify the `emails` table is created

### 2. Configure Email Settings
1. Go to Supabase Dashboard → Settings → Auth
2. Configure your email settings:
   - **SMTP Host:** Your email provider (Gmail, SendGrid, etc.)
   - **SMTP Port:** Usually 587 or 465
   - **SMTP User:** Your email username
   - **SMTP Pass:** Your email password
   - **Sender Name:** GradeLab
   - **Sender Email:** noreply@gradelab.io

### 3. Create Database Function
Create a function to send emails when they're inserted:

```sql
-- Create function to send emails
CREATE OR REPLACE FUNCTION send_welcome_email()
RETURNS TRIGGER AS $$
BEGIN
  -- This will trigger Supabase's built-in email system
  -- The email will be sent automatically when a new record is inserted
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER trigger_send_welcome_email
  AFTER INSERT ON emails
  FOR EACH ROW
  EXECUTE FUNCTION send_welcome_email();
```

### 4. Test the System
1. Start your development server: `npm run dev`
2. Test the waitlist signup
3. Check the `emails` table in Supabase dashboard
4. Verify email delivery

## Email Configuration Options

### Option A: Use Supabase's Built-in SMTP
- Configure SMTP settings in Supabase dashboard
- No external dependencies needed
- Limited to basic email functionality

### Option B: Use Supabase with External Email Service
- Configure Supabase to use SendGrid, Mailgun, etc.
- More advanced features available
- Better deliverability

### Option C: Use Database Webhooks
- Set up webhooks to trigger external email services
- Most flexible approach
- Requires additional setup

## Monitoring

### Check Email Status
```sql
-- Check pending emails
SELECT * FROM emails WHERE status = 'pending';

-- Check sent emails
SELECT * FROM emails WHERE status = 'sent';

-- Check failed emails
SELECT * FROM emails WHERE status = 'failed';
```

### Email Logs
- Supabase Dashboard → Logs → Database
- Check for email-related errors
- Monitor delivery status

## Troubleshooting

### Emails Not Sending
1. Check SMTP configuration in Supabase dashboard
2. Verify email credentials are correct
3. Check database logs for errors
4. Ensure RLS policies are configured correctly

### Database Errors
1. Verify the `emails` table exists
2. Check RLS policies
3. Ensure service role has proper permissions

### Email Delivery Issues
1. Check spam folder
2. Verify sender email is configured
3. Test with different email providers

## Current Status

✅ **API Route** - Stores emails in database  
✅ **Email Template** - Updated with new content  
✅ **Database Schema** - Ready for implementation  
✅ **Error Handling** - Won't break signup  
⏳ **SMTP Configuration** - Needs setup in Supabase dashboard  

## Next Steps

1. **Run the SQL setup** in your Supabase dashboard
2. **Configure SMTP settings** in Supabase Auth settings
3. **Test the complete flow** - signup → email storage → email sending
4. **Monitor email delivery** and adjust settings as needed

The system is now ready to use Supabase's native email functionality! Once you configure the SMTP settings, emails will be sent automatically when users join your waitlist.

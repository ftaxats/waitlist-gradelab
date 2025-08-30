# Supabase Edge Function Email Setup

## ✅ Implementation Complete

Your welcome email system is now configured to use your Supabase Edge Function at:
`https://ujismntthfzfkrzgedit.supabase.co/functions/v1/send-welcome-email`

## What's Been Implemented

### 1. API Route Updated
- **File:** `app/api/submit/route.ts`
- **Function:** Calls your Supabase Edge Function when someone joins the waitlist
- **Error Handling:** Won't break signup if email fails

### 2. Edge Function Ready
- **File:** `supabase/functions/send-welcome-email/index.ts`
- **URL:** `https://ujismntthfzfkrzgedit.supabase.co/functions/v1/send-welcome-email`
- **Function:** Receives email data and processes it

## Next Steps

### 1. Deploy the Edge Function

If you haven't deployed the Edge Function yet:

```bash
# Install Supabase CLI if you haven't
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref ujismntthfzfkrzgedit

# Deploy the function
supabase functions deploy send-welcome-email
```

### 2. Add Email Service Integration

The Edge Function currently simulates email sending. You need to integrate with an email service. Here are your options:

#### Option A: Resend (Recommended)
```typescript
// In supabase/functions/send-welcome-email/index.ts
import { Resend } from 'resend'

const resend = new Resend(Deno.env.get('RESEND_API_KEY'))

// Replace the simulation code with:
const { data, error } = await resend.emails.send({
  from: from || 'noreply@gradelab.io',
  to: [to],
  subject,
  html,
  text,
})
```

#### Option B: SendGrid
```typescript
// In supabase/functions/send-welcome-email/index.ts
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(Deno.env.get('SENDGRID_API_KEY')!)

// Replace the simulation code with:
const msg = {
  to,
  from: from || 'noreply@gradelab.io',
  subject,
  html,
  text,
}

await sgMail.send(msg)
```

### 3. Set Environment Variables

Add these to your Supabase Edge Function environment:

```bash
# For Resend
RESEND_API_KEY=re_your_api_key_here

# For SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key_here
```

### 4. Test the System

1. **Test the Edge Function directly:**
   ```bash
   curl -X POST https://ujismntthfzfkrzgedit.supabase.co/functions/v1/send-welcome-email \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer YOUR_SERVICE_ROLE_KEY" \
     -d '{
       "to": "test@example.com",
       "subject": "Test Email",
       "html": "<h1>Test</h1>",
       "text": "Test"
     }'
   ```

2. **Test the waitlist signup:**
   - Go to your waitlist page
   - Enter an email address
   - Submit the form
   - Check your email for the welcome message

## Current Status

✅ **API Route** - Calls your Edge Function  
✅ **Email Template** - Professional GradeLab branding  
✅ **Error Handling** - Won't break signup  
✅ **Edge Function** - Ready to receive requests  
⏳ **Email Service** - Needs integration (Resend/SendGrid)  

## Monitoring

- **Supabase Dashboard:** Check Edge Function logs
- **Email Service Dashboard:** Monitor email delivery
- **Console Logs:** Check for any errors

## Troubleshooting

### Edge Function Not Responding
- Check if the function is deployed
- Verify the URL is correct
- Check Supabase dashboard for logs

### Email Not Sending
- Integrate with an email service (Resend/SendGrid)
- Check environment variables
- Verify email service API keys

### Authentication Errors
- Ensure `SUPABASE_SERVICE_ROLE_KEY` is correct
- Check Edge Function permissions

The system is ready to send beautiful welcome emails once you integrate with an email service!

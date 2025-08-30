# Welcome Email Setup Guide

This guide will help you set up automatic welcome emails for users who join your GradeLab waitlist.

## Option 1: Using Resend (Recommended)

### 1. Install Resend
```bash
npm install resend
```

### 2. Get Resend API Key
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add to your environment variables:
```env
RESEND_API_KEY=your_api_key_here
```

### 3. Update API Route
Replace the TODO section in `app/api/submit/route.ts` with:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// In the POST function, after successful email insertion:
try {
  const emailContent = generateWelcomeEmail(email);
  
  const { data, error } = await resend.emails.send({
    from: 'GradeLab <noreply@gradelab.io>',
    to: [email],
    subject: '🎉 Welcome to GradeLab! You\'re on our waitlist',
    html: emailContent.html,
    text: emailContent.text,
  });

  if (error) {
    console.error('Email error:', error);
  } else {
    console.log('Welcome email sent to:', email);
  }
} catch (emailError) {
  console.error('Email sending failed:', emailError);
}
```

## Option 2: Using SendGrid

### 1. Install SendGrid
```bash
npm install @sendgrid/mail
```

### 2. Get SendGrid API Key
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Get your API key from the dashboard
3. Add to your environment variables:
```env
SENDGRID_API_KEY=your_api_key_here
```

### 3. Update API Route
Replace the TODO section in `app/api/submit/route.ts` with:

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// In the POST function, after successful email insertion:
try {
  const emailContent = generateWelcomeEmail(email);
  
  const msg = {
    to: email,
    from: 'noreply@gradelab.io',
    subject: '🎉 Welcome to GradeLab! You\'re on our waitlist',
    html: emailContent.html,
    text: emailContent.text,
  };

  await sgMail.send(msg);
  console.log('Welcome email sent to:', email);
} catch (emailError) {
  console.error('Email sending failed:', emailError);
}
```

## Option 3: Using Supabase Edge Functions

### 1. Set up Supabase CLI
```bash
npm install -g supabase
supabase login
supabase link --project-ref your-project-ref
```

### 2. Create Edge Function
```bash
supabase functions new send-welcome-email
```

### 3. Deploy Edge Function
```bash
supabase functions deploy send-welcome-email
```

### 4. Set up Database Trigger
Run the SQL in `supabase-emails-setup.sql` in your Supabase dashboard.

## Option 4: Using Vercel's Built-in Email

### 1. Install Vercel Email
```bash
npm install @vercel/email
```

### 2. Update API Route
Replace the TODO section in `app/api/submit/route.ts` with:

```typescript
import { sendEmail } from '@vercel/email';

// In the POST function, after successful email insertion:
try {
  const emailContent = generateWelcomeEmail(email);
  
  await sendEmail({
    to: email,
    from: 'noreply@gradelab.io',
    subject: '🎉 Welcome to GradeLab! You\'re on our waitlist',
    html: emailContent.html,
    text: emailContent.text,
  });

  console.log('Welcome email sent to:', email);
} catch (emailError) {
  console.error('Email sending failed:', emailError);
}
```

## Email Template Features

The email template (`lib/email-template.ts`) includes:

- ✅ Professional HTML design with GradeLab branding
- ✅ Responsive layout for mobile and desktop
- ✅ Plain text version for email clients that don't support HTML
- ✅ Call-to-action button linking to demo booking
- ✅ GradeLab features and benefits
- ✅ Clear next steps for waitlist members

## Environment Variables

Add these to your `.env.local` file:

```env
# For Resend
RESEND_API_KEY=your_resend_api_key

# For SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key

# For Supabase (already configured)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## Testing

1. Test the email functionality locally
2. Check email delivery in your email service dashboard
3. Verify email content and styling across different email clients
4. Test the demo booking link functionality

## Monitoring

- Monitor email delivery rates
- Track email open rates and click-through rates
- Set up alerts for failed email sends
- Log email events for debugging

## Next Steps

1. Choose your preferred email service
2. Implement the email sending code
3. Test thoroughly
4. Deploy to production
5. Monitor email performance

The email template is already created and ready to use. Just implement the email sending logic using one of the options above!

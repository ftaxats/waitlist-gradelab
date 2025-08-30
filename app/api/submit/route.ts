import { supabase } from '@/lib/supabase'
import { generateWelcomeEmail } from '@/lib/email-template'

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return new Response("Email is required", { status: 400 });
  }

  try {
    // Check if email already exists
    const { data: existingEmail } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single();

    if (existingEmail) {
      return new Response("Email already exists", { status: 409 });
    }

    // Insert new email
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email: email,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error);
      return new Response("Failed to submit email!", {
        status: 500,
        statusText: error.message,
      });
    }

    // Send welcome email using Supabase Edge Function
    try {
      const emailContent = generateWelcomeEmail(email);
      
      const response = await fetch('https://ujismntthfzfkrzgedit.supabase.co/functions/v1/send-welcome-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`,
        },
        body: JSON.stringify({
          to: email,
          subject: '🎉 Welcome to GradeLab! You\'re on our waitlist',
          html: emailContent.html,
          text: emailContent.text,
          from: 'noreply@gradelab.io',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Email error:', errorData);
        // Don't fail the request if email fails, just log it
      } else {
        console.log('Welcome email sent to:', email);
      }
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails, just log it
    }

    return new Response("Email submitted successfully!", {
      status: 200,
    });
  } catch (error) {
    console.error('Server error:', error);
    return new Response("Internal server error", { status: 500 });
  }
}

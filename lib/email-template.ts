export function generateWelcomeEmail(email: string) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to GradeLab!</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
        }
        .header {
          text-align: center;
          padding: 30px 0;
          background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%);
          color: white;
          border-radius: 10px 10px 0 0;
        }
        .content {
          padding: 30px;
          background: #f9f9f9;
        }
        .footer {
          text-align: center;
          padding: 20px;
          background: #333;
          color: white;
          border-radius: 0 0 10px 10px;
        }
        .button {
          display: inline-block;
          padding: 12px 24px;
          background: #84cc16;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          margin: 20px 0;
        }
        .highlight {
          background: #e7f5d3;
          padding: 15px;
          border-left: 4px solid #84cc16;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎉 Welcome to GradeLab!</h1>
        <p>You're now on our exclusive waitlist</p>
      </div>
      
      <div class="content">
        <h2>Hi there!</h2>
        
        <p>Thank you for joining the GradeLab waitlist! We're excited to have you on board.</p>
        
        <div class="highlight">
          <strong>What's GradeLab?</strong><br>
          GradeLab is an AI-powered educational assessment platform that helps teachers:
          <ul>
            <li>Grade handwritten exams in seconds with 98% accuracy</li>
            <li>Generate diverse questions using Bloom's taxonomy</li>
            <li>Create custom rubrics for consistent evaluation</li>
            <li>Track student performance with detailed analytics</li>
          </ul>
        </div>
        
        <p><strong>What happens next?</strong></p>
        <ul>
          <li>We'll notify you as soon as GradeLab launches</li>
          <li>You'll get early access to our beta version</li>
          <li>Exclusive discounts for waitlist members</li>
          <li>Priority support when you join</li>
        </ul>
        
        <div style="text-align: center;">
          <a href="https://cal.com/teamgradelab/15min" class="button">
            📅 Book a Demo
          </a>
        </div>
        
        <p>Want to see GradeLab in action? Book a 15-minute demo and we'll show you how it can transform your grading workflow.</p>
        
        <p>Stay tuned for updates!</p>
        
        <p>Best regards,<br>
        The GradeLab Team</p>
      </div>
      
      <div class="footer">
        <p>© 2024 GradeLab. All rights reserved.</p>
        <p>If you have any questions, reply to this email.</p>
      </div>
    </body>
    </html>
  `;

  const textContent = `
Welcome to GradeLab!

Hi there!

Thank you for joining the GradeLab waitlist! We're excited to have you on board.

What's GradeLab?
GradeLab is an AI-powered educational assessment platform that helps teachers:
- Grade handwritten exams in seconds with 98% accuracy
- Generate diverse questions using Bloom's taxonomy
- Create custom rubrics for consistent evaluation
- Track student performance with detailed analytics

What happens next?
- We'll notify you as soon as GradeLab launches
- You'll get early access to our beta version
- Exclusive discounts for waitlist members
- Priority support when you join

Want to see GradeLab in action? Book a demo: https://cal.com/teamgradelab/15min

Stay tuned for updates!

Best regards,
The GradeLab Team

© 2024 GradeLab. All rights reserved.
  `;

  return {
    html: htmlContent,
    text: textContent
  };
}

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
        .benefits {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .benefit-item {
          display: flex;
          align-items: center;
          margin: 10px 0;
        }
        .benefit-icon {
          color: #84cc16;
          margin-right: 10px;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎉 Welcome to GradeLab!</h1>
        <p>You're now on our exclusive waitlist</p>
      </div>
      
      <div class="content">
        <h2>Thank you for joining the waitlist for GradeLab! 🎉</h2>
        
        <p>We're excited to have you onboard as we build the next generation of smart AI-powered assessments.</p>
        
        <div class="benefits">
          <h3>As a waitlist member, you'll be among the first to:</h3>
          <div class="benefit-item">
            <span class="benefit-icon">✅</span>
            <span>Get early access before public launch</span>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✅</span>
            <span>Share feedback that directly shapes the product</span>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✅</span>
            <span>Unlock 24x7 priority support and exclusive updates</span>
          </div>
        </div>
        
        <p>To help you understand how GradeLab can work for your needs, we'd love to connect with you directly.</p>
        
        <p>You can book a quick 30-minute meeting with our team here:</p>
        
        <div style="text-align: center;">
          <a href="https://cal.com/teamgradelab/30min" class="button">
            👉 Book a Meeting
          </a>
        </div>
        
        <p>We can't wait to show you what we've been building.</p>
        
        <p>Thanks again for being an early supporter — you're part of shaping the future of assessments.</p>
        
        <p>Best,<br>
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
Thank you for joining the waitlist for GradeLab! 🎉

We're excited to have you onboard as we build the next generation of smart AI-powered assessments.

As a waitlist member, you'll be among the first to:
✅ Get early access before public launch
✅ Share feedback that directly shapes the product
✅ Unlock 24x7 priority support and exclusive updates

To help you understand how GradeLab can work for your needs, we'd love to connect with you directly.

You can book a quick 30-minute meeting with our team here:
👉 Book a Meeting: https://cal.com/teamgradelab/30min

We can't wait to show you what we've been building.

Thanks again for being an early supporter — you're part of shaping the future of assessments.

Best,
The GradeLab Team

© 2025 GradeLab. All rights reserved.
  `;

  return {
    html: htmlContent,
    text: textContent
  };
}

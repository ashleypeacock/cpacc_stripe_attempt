import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

const templates = {
  'subscription-welcome': {
    subject: 'Welcome to Premium Access!',
    html: (data) => `
      <h1>Welcome to Premium Access!</h1>
      <p>Thank you for subscribing to our premium service. Your subscription is now active.</p>
      <p>Your subscription will renew on: ${data.endDate}</p>
      <p>You now have access to:</p>
      <ul>
        <li>Unlimited quiz attempts</li>
        <li>Detailed explanations</li>
        <li>Progress tracking</li>
        <li>Performance analytics</li>
        <li>Study materials</li>
      </ul>
    `
  },
  'subscription-renewal': {
    subject: 'Subscription Renewal Reminder',
    html: (data) => `
      <h1>Subscription Renewal Reminder</h1>
      <p>Your subscription will renew on ${data.dueDate}.</p>
      <p>Amount due: $${data.amount}</p>
      <p>To update your payment method, click here:</p>
      <a href="${data.updatePaymentUrl}">Update Payment Method</a>
    `
  },
  'payment-failed': {
    subject: 'Payment Failed',
    html: (data) => `
      <h1>Payment Failed</h1>
      <p>We were unable to process your payment of $${data.amount}.</p>
      <p>Please update your payment method to continue your subscription:</p>
      <a href="${data.updatePaymentUrl}">Update Payment Method</a>
    `
  },
  'subscription-canceled': {
    subject: 'Subscription Canceled',
    html: (data) => `
      <h1>Subscription Canceled</h1>
      <p>Your subscription has been canceled. We're sorry to see you go!</p>
      <p>You can resubscribe at any time to regain access:</p>
      <a href="${data.resubscribeUrl}">Resubscribe</a>
    `
  }
};

export async function sendEmail({ to, template, data, subject = null }) {
  const emailTemplate = templates[template];
  if (!emailTemplate) throw new Error(`Template ${template} not found`);

  const mailOptions = {
    from: process.env.SMTP_FROM,
    to,
    subject: subject || emailTemplate.subject,
    html: emailTemplate.html(data)
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}
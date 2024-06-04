const nodemailer = require("nodemailer");
async function sendMail({ from, to, subject, text, html }) {
  // setting transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  // sending email
  let info = await transporter.sendMail({
    from: from,
    to: to,
    subject: subject,
    text: text,
    html: html,
  });
}

module.exports = sendMail;

// 28a83325093674154efa04d844ea98eb-a4da91cf-b655eaa9

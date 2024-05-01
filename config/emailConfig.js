require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'apikey', // SendGrid API key as the SMTP user
    pass: process.env.SENDGRID_API_KEY
  }
});

module.exports = transporter;
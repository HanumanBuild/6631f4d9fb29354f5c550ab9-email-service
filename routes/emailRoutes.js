const express = require('express');
const router = express.Router();
const transporter = require('../config/emailConfig');

// POST route to send an email
router.post('/send', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await transporter.sendMail({
      from: '"Your Name or Company" <your-email@example.com>', // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      // html: '<p>Your HTML content here.</p>' // HTML body content
    });
    res.send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Failed to send email');
  }
});

module.exports = router;
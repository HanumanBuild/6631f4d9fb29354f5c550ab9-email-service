const express = require('express');
const bodyParser = require('body-parser');
const emailRoutes = require('./routes/emailRoutes'); // Import the email routes

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/email', emailRoutes); // Use the email routes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
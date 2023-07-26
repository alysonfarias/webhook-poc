const express = require('express');
const cors = require('cors'); // Import the CORS package


const app = express();
const port = 4000;


// Enable CORS for all routes
app.use(cors());

app.post('/notificationEndpoint', (req, res) => {
  console.log("🚀 ~ file: clientNotificationEndpoint.js:6 ~ app.post ~ res:", res.body)
  console.log("🚀 ~ file: clientNotificationEndpoint.js:6 ~ app.post ~ req:", req.body)
  console.log('Notification received from server:');
  // Additional handling, logging, or processing on the client's side can be done here.
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Notification server is running at http://localhost:${port}`);
});
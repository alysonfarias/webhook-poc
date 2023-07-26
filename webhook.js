const express = require('express');
const cors = require('cors'); // Import the CORS package
const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

//For example, if you want restrict CORS to a single route, you can do this:
// const corsOptions = {
//   origin: 'http://127.0.0.1:5173',
// };

// app.use(cors(corsOptions));


// POST endpoint for report processing
app.post('/reportEndpoint', (req, res) => {
  // Perform initial processing (e.g., input validation) and respond with acknowledgment.
  // The actual report processing will be done asynchronously.
  console.log('Report received. Processing started...');
  res.status(202).json({ message: 'Report processing started.' });

  // Start the asynchronous report processing task
  // processReportAsync(req.body); // Assuming req.body contains the necessary report data
  processReportAsync("oi mundo"); // Assuming req.body contains the necessary report data
});

app.listen(port, () => {
  console.log(`Webhook server is running at http://localhost:${port}`);
});

function processReportAsync(reportData) {
    // Simulate asynchronous processing using setTimeout (5 to 10 seconds delay)
    const processingTime = Math.floor(Math.random() * 6) + 1;
    console.log("🚀 ~ file: webhook.js:23 ~ processReportAsync ~ processingTime:", processingTime)
    setTimeout(() => {
      console.log('Report processing completed.');
      sendNotification(reportData); // Notify the client about the completed report
    }, processingTime * 1000);
  }

const axios = require('axios'); // You might need to install this package via npm

function sendNotification(reportData) {
  const notificationEndpoint = "http://localhost:4000/notificationEndpoint"; // Assuming the client provides this endpoint
  
  // const log => {

  // }= console.log()
  console.log('Sending notification to client...');
  // Make a POST request to the client's notification endpoint
  axios.post(notificationEndpoint, { message: 'Report processing completed. 333' })
    .then(response => {
      console.log('Notification sent to client.');
    })
    .catch(error => {
      console.error('Error sending notification:', error.message);
    });
}
<template>
    <div>
      <button @click="sendReport">Send Report</button>
      <span v-if="notificationStatus" class="notification-icon">🔔</span>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        notificationStatus: false,
      };
    },
    methods: {
      sendReport() {
        // Simulate sending a report by making a POST request to reportEndpoint
        axios.post('http://localhost:3000/reportEndpoint', { data: 'your report data here' })
          .then(() => {
            this.notificationStatus = true;
            this.checkNotificationStatus();
          })
          .catch((error) => {
            console.error('Error sending report:', error.message);
          });
      },
      checkNotificationStatus() {
        // Make a POST request to the server's notification endpoint
        axios.post('http://localhost:4000/notificationEndpoint')
          .then((response) => {
            this.notificationStatus = false; // Reset notification status after checking
          })
          .catch((error) => {
            console.error('Error checking notification:', error.message);
          });
      },
    },
  };
  </script>
  
  <style>
  .notification-icon {
    font-size: 20px;
    margin-left: 5px;
  }
  </style>
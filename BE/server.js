const express = require("express");
const os = require("os");
const cors = require("cors"); // Import the cors package

const app = express();
const port = process.env.PORT || 8080;

// Use CORS middleware
app.use(cors()); // Enable CORS for all routes

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Dummy API
app.get("/api", (req, res) => {
  res.send({
    message: "Hello from the Backend-1!",
    instance: os.hostname(), // Identifies which server responded
  });
});

// Start server
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
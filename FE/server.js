const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 8081;

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Fetch data from Backend 1's /api endpoint
app.get("/api", async (req, res) => {
  try {
    // Fetch data from backend-1 (/api)
    const response = await axios.get("http://100.107.217.125:8080/api");
    res.send({
      fetchedData: response.data,
    });
  } catch (error) {
    console.error("Error fetching data from Backend 1:", error.message); // Log the error
    res.status(500).send({ error: "Failed to fetch data from Backend 1" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Backend 2 running on http://localhost:${port}`);
});

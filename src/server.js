const express = require("express");
const app = express();
const path = require("path");

// Connect to the database
const connectDB = require("../database/db.js");

// Middleware
app.use(express.json()); // Middleware for JSON body parsing

// Import environment variables
require("dotenv").config({
    path: path.join(__dirname, "../config/config.env"),
});

const PORT = process.env.PORT || 3333;

// Start the server after connecting to the MongoDB
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log("Server is running on port", PORT);
        });
    } catch (err) {
        console.error("Error starting server:", err);
        process.exit(1);
    }
};

startServer();

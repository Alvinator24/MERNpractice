require("dotenv").config();

const express = require("express");

const mongoose = require("mongoose");

const scheduleRoutes = require("./routes/schedule");

// Create express app
const app = express();

// Define the port number
const port = 3000;

// Middleware
// for any request that comes in, it checks if there is data that needs to be sent to the server
// if it does, it attaches it to the req object to be accessed in the request handler
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Route handling
app.use("/api/schedule", scheduleRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
        console.log("Connected to MongoDB and listening to port", process.env.PORT);
        });
    })
    .catch((error) => { console.log(error); });
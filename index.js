// Import necessary modules
const express = require("express"); // Import Express framework
const path = require("path"); // Path module for working with file and directory paths
const app = express(); // Create Express application instance
const cookieParser = require("cookie-parser"); 
const mongoose = require("mongoose"); 
const Event = require("./models/event"); 
const userRoutes = require("./routes/user"); 
const eventRoutes = require('./routes/event');
const {Auth} = require("./middleware/auth");

const dotenv = require("dotenv"); // Load environment variables from a .env file
dotenv.config(); // Initialize dotenv

// Set up view engine and views directory
app.set("view engine", "ejs"); // Set EJS as the view engine
app.set("views", path.resolve("./views")); // Set the views directory

// Middleware for parsing URL-encoded request bodies
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // Middleware for parsing cookies

// Custom authentication middleware to verify JWT token
app.use(Auth("token"));

// Route for handling user-related endpoints
app.use("/user", userRoutes);
app.use('/event',eventRoutes);

// Route for rendering the home page
app.get("/", async (req, res) => {

    try {
        // Retrieve all events from the database
       const allEvents = await Event.find({});

        // Your existing logic to retrieve events and calculate pagination values
        let eventPerPage = 6;
        let totalPages = Math.ceil(allEvents.length / eventPerPage);

        let currentPage = parseInt(req.query.page) || 1;
        currentPage = Math.max(currentPage, 1);
        currentPage = Math.min(currentPage, totalPages);


        // Render the home page template with the necessary variables
        return res.render("home", {
            user: req.user, // Pass the user object to the view
            events: allEvents,
            currentPage : currentPage,
            eventPerPage : eventPerPage,
            totalPages : totalPages, // Pass the events array to the view
        });
    } catch (error) {
        console.error("Error fetching events:", error);
        res.status(500).send("Internal Server Error");
    }

   

    
});

// Connect to MongoDB using the provided connection URL
mongoose
    .connect(process.env.CONNECTION_URL) // Connect to MongoDB
    .then(
        // Start the server if MongoDB connection is successful
        app.listen(process.env.PORT, () => {
            console.log(`Server Running On Port : ${process.env.PORT}`); 
        })
    )
    .catch((err) => console.log(`Server Not Responding ${err}`)); 

const cors = require("cors");
const express = require("express");

const apartmentRoutes = require("./routes/apartmentRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/apartments", apartmentRoutes);
app.use("/bookings", bookingRoutes);
app.use("/reviews", reviewRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Running wagon server"
    });
});

app.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

module.exports = app;
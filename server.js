const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connection");
const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

const app = express();

app.use(express.json());

// Connect to MongoDB
connectDB();

// Book routes
app.use("/api/books", bookRoutes);

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Digital Bookshelf API is running!"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port: http://localhost:${PORT}`);
});
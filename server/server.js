import 'dotenv/config'; // Automatically loads variables from .env file
import express, { json } from "express";
import mongoose from "mongoose"; // Import mongoose properly with ES6
import cors from "cors"; 
import authRoutes from "./routes/auth.js";

const app = express();

// Middleware
app.use(cors());
app.use(json());

// MongoDB connection using the URI from .env
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(error => console.error("Error connecting to MongoDB Atlas:", error));

// Routes
app.use("/api", authRoutes);

// Start the server
const PORT = process.env.PORT || 5000; // Use environment port if available
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

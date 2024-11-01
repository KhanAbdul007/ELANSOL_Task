import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(json());

// Connect to MongoDB
connect("mongodb+srv://khanabdul8983:hfIOW9AYeGqQ2rtf@cluster0.2z0f1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch(error => {
  console.error("Error connecting to MongoDB Atlas:", error);
});


// Routes
app.use("/api", authRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

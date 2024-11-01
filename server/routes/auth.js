import { Router } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt"; // Import bcrypt

const router = Router();

// Registration Route
router.post("/register", async (req, res) => {
  const { name, lastName, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, lastName, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

// Sign-in Route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt:", { email, password });

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found");
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // Compare the password with the hashed password
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      res.status(200).json({ success: true, message: "Successfully logged in!", user: { name: user.name } });
    } else {
      console.log("Password does not match");
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ success: false, message: "Login failed", error });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});
export default router;

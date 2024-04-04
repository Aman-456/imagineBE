const express = require("express");
require("dotenv").config();
const collection = require("./models/user.model");
const cors = require("cors");
const bcrypt = require("bcrypt");
const path = require("path");

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
const port = process.env.PORT || 4000;
app.listen(port, (req, res) => {
  console.log(`app listening at ${port}`);
});

// sign up post
app.post("/api-signup", async (req, res) => {
  try {
    const data = {
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10),
      email: req.body.email,
    };

    // Check if user already exists
    const existingUser = await collection.findOne({ username: data.username });
    const excitingEmail = await collection.findOne({ email: data.email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists. Please try another name" });
    }
    if (excitingEmail) {
      return res
        .status(400)
        .json({ message: "email address exists. Please try another address" });
    }

    const userData = await collection.create(data);
    console.log(userData);
    return res
      .status(200)
      .json({ message: "User created successfully", userData });
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// login post
app.post("/api-login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await collection.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // If user exists and password is correct, return success
    return res
      .status(200)
      .json({ message: "Login successful", userData: user });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "./client/dist")));

// this send back React's build's index.html file.
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist", "index.html"));
});

// src/index.js
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

// so req.body works
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// simple test route
app.get("/", (req, res) => {
  res.send("Server is up ✅");
});

app.get("/ping", (req, res) => {
  res.send("pong 🏓");
});

app.use("/api/auth", authRoutes);

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});

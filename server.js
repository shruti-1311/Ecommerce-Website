import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";


// Configure env
dotenv.config();

// Database config
connectDB();

// Rest object
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoutes);

// Rest API
app.post('/api/v1/auth/register', (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

// Run listen
app.listen(PORT, () => {
  console.log(
    `Server Running mode on ${process.env.NODE_ENV} port ${PORT}`.bgCyan.white
  );
});

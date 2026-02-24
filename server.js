import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import recipeRoutes from "./routes/recipeRoutes.js";

dotenv.config();

const app = express();

// connect database
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/recipe", recipeRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

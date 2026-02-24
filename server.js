import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import recipeRoutes from "./routes/recipeRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();   // wait for DB

    app.use("/api/recipe", recipeRoutes);

    app.get("/", (req, res) => {
      res.send("API Running...");
    });

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (error) {
    console.log("Server Start Failed ❌", error);
  }
};

startServer();
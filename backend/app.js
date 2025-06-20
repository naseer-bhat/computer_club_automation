import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import allRoutes from "./src/routes/index.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const dbUrl = process.env.DBURI;
connectDB(dbUrl);
app.use(cors());
app.use(express.json());
app.use("/api", allRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
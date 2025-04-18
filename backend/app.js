import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const dbUrl = process.env.DBURI;
// Database Connection
connectDB(dbUrl);
app.use(cors());
app.use(express.json());

import userRoute from "./src/routes/userRoute.js";
app.use("/api", userRoute);
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

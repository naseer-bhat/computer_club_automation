import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path'
import { fileURLToPath } from 'url'
import { connectDB } from "./src/config/db.js";
import allRoutes from "./src/routes/index.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const dbUrl = process.env.DBURI;
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
connectDB(dbUrl);
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'welcome.html'))
})
app.get('/')
app.use("/api", allRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
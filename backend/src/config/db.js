import { connect } from "mongoose";
export const connectDB = async (dburl) => {
  try {
    await connect(dburl);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1);
  }
};

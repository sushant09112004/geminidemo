import { error } from "console";
import mongoose from "mongoose";

const connectMongoDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    // If already connected
    console.log("Already connected to MongoDB");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Cannot connect to the database", error);
    throw new Error("Database connection failed");
  }
};

export default connectMongoDB;

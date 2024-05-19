import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Connected to mongoDB");
  } catch (error) {
    console.error("Error connecting to mongoDB", error);
  }
};

export default connectDB;

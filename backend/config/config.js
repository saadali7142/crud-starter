import dotenv from "dotenv";
dotenv.config();

const config = {
  PORT: process.env.PORT || 3000,
  MONGODB_URL: process.env.MONGODB_URL || "mongodb://localhost:27017/userPost",
  JWT_SECRET: process.env.JWT_SECRET,
};

export default config;

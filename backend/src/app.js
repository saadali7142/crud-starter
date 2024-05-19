import express from "express";
import config from "../config/config.js";
import connectDB from "../config/connection.js";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

const start = async () => {
  await connectDB(config.MONGODB_URL);

  app.listen(config.PORT || 3000, () => {
    console.log(`Server listening on port ${config.PORT}!`);
  });
};

start();

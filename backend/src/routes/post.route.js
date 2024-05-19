import express from "express";
import { createPost, getPosts } from "../controllers/post.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const postRouter = express.Router();

postRouter.post("/", isAuthenticated, createPost);
postRouter.get("/", getPosts);

export default postRouter;

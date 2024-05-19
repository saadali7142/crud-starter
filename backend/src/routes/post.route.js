import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPostsByUser,
  updatePost,
} from "../controllers/post.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const postRouter = express.Router();

postRouter.post("/", isAuthenticated, createPost);
postRouter.get("/", isAuthenticated, getPostsByUser);
postRouter.get("/:id", getPost);
postRouter.patch("/:id", isAuthenticated, updatePost);
postRouter.delete("/:id", isAuthenticated, deletePost);

export default postRouter;

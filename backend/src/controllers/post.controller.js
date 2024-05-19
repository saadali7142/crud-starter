import { StatusCodes } from "http-status-codes";
import PostModel from "../models/post.model.js";

export const createPost = async (req, res) => {
  const userId = req.user._id;
  const { title, body } = req.body;

  const post = await PostModel.create({
    userId,
    title,
    body,
  });

  res.status(StatusCodes.OK).json({
    success: true,
    data: post,
  });
};

export const getPosts = async (req, res) => {
  const posts = await PostModel.find({}).populate("userId", "name email");

  res.status(StatusCodes.OK).json({
    success: true,
    data: posts,
  });
};

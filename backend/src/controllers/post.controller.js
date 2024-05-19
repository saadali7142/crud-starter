import { StatusCodes } from "http-status-codes";
import PostModel from "../models/post.model.js";
import NotFoundError from "../errors/not-found.js";
import BadRequestError from "../errors/bad-request.js";

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

export const getPostsByUser = async (req, res) => {
  const posts = await PostModel.find({ userId: req.user._id }).populate(
    "userId",
    "name email"
  );

  res.status(StatusCodes.OK).json({
    success: true,
    data: posts,
  });
};

export const getPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) throw new NotFoundError("Post not found!");

  res.status(StatusCodes.OK).json({
    success: true,
    data: post,
  });
};

export const updatePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) throw new NotFoundError("Post not found");

  if (post.userId.toString() !== req.user._id)
    throw new BadRequestError(
      "You can't edit this post because you're not the owner of this post!"
    );

  const updatePost = await PostModel.findByIdAndUpdate(
    post._id,
    {
      ...req.body,
    },
    {
      runValidators: true,
      new: true,
    }
  );

  res.status(StatusCodes.OK).json({
    success: true,
    data: updatePost,
  });
};

export const deletePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);
  if (!post) throw new NotFoundError("Post not found");

  if (post.userId.toString() !== req.user._id)
    throw new BadRequestError(
      "You can't edit this post because you're not the owner of this post!"
    );

  const deletePost = await PostModel.findByIdAndDelete(post._id);

  res.status(StatusCodes.OK).json({
    success: true,
    message: "Post deleted successfully!",
  });
};

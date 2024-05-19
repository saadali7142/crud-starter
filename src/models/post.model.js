import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title."],
      unique: true,
    },
    body: {
      type: String,
      required: [true, "Body must not be empty."],
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("post", postSchema);
export default PostModel;

import jwt from "jsonwebtoken";
import config from "../../config/config.js";
import BadRequestError from "../errors/bad-request.js";
import UserModel from "../models/user.model.js";

const isAuthenticated = async (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers.authorization;

  if (req.headers.authorization) token = token.split(" ").pop()?.trim();

  if (!token) throw new BadRequestError("Not logged in!");

  try {
    const payload = jwt.verify(token, config.JWT_SECRET);

    const user = await UserModel.findById(payload.userId);
    if (!user) throw new BadRequestError("User not found!");

    req.user = user;
  } catch (error) {
    throw new BadRequestError(error);
  }
  next();
};

export default isAuthenticated;

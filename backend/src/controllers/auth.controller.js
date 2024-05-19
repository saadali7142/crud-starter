import BadRequestError from "../errors/bad-request.js";
import UserModel from "../models/user.model.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!password) throw new BadRequestError("Please provide password");

  const user = await UserModel.findOne({ email });

  if (user) throw new BadRequestError("Email already exists!");

  const newUser = await UserModel.create({
    name,
    email,
    password,
  });

  const token = await newUser.createToken();

  res.status(200).json({
    success: true,
    user: {
      name,
      email,
    },
    token,
    message: "User created successfully!",
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!password) throw new BadRequestError("Please provide password");

  const user = await UserModel.findOne({ email });
  if (!user) throw new BadRequestError("Invalid email");

  const isValidPassword = await user.comparePassword(password);
  if (!isValidPassword) throw new BadRequestError("Invalid password");

  const token = await user.createToken();

  res.status(200).json({
    success: true,
    data: user,
    jwtToken: token,
  });
};

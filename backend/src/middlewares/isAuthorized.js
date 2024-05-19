import { ForbiddenError } from "../errors";

const isAuthorized = (...roles) => {
  return async (req, res, next) => {
    if (!roles.includes(req.user.role))
      throw new ForbiddenError("Permission denied!");
  };
};

export default isAuthorized;

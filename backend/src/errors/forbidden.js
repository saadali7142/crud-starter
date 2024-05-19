import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

class ForbiddenError extends CustomAPIError {
  constructor(message) {
    super(message, StatusCodes.FORBIDDEN);
  }
}

export default ForbiddenError;

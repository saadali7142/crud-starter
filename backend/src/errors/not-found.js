import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

export default NotFoundError;

class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.errors = {
      item: {
        message: "",
      },
    };
  }
}

export default CustomAPIError;

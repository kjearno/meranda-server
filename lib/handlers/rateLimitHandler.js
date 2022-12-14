const { AppError } = require("../errors");

const rateLimitHandler = () => {
  throw new AppError(429, "Too many requests, please try again later");
};

module.exports = rateLimitHandler;

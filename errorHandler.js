const errorHandler = (err, req, res, next) => {
  console.log(err.stack);

  const statusCode = err.status || 500;
  const message = err.message || "Something went wrong";

  res.status(statusCode).json({
    statusCode,
    message: message,
  });
};

module.exports = errorHandler;

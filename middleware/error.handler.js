function errorLogs (err, req, res, next) {
  console.log('ErrorLogs');
  console.error(err);
  next(err);
}

function handlerError (err, req, res, next) {
  console.log('HandleeError');
  res.status(501).json({
    message: err.message,
    stack: err.stack
  });
}

module.exports = {
  errorLogs,
  handlerError
}


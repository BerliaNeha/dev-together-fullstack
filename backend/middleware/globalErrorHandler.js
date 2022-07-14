const globalErrorHandler = (err, req, res, next) => {
    console.log(err);

    // Give the received error a status and msg if missing!

    if (!err.statusCode) err.statusCode = 500;
    if (!err.message) err.message = "An unknown error occurred";

    res.status(err.statusCode).json({ message: err.message });
}

export default globalErrorHandler;
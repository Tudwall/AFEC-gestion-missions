function errorHandler(err, req, res, next) {
	err.statusCode = err.statusCode || 500;
	err.status = err.status || "Quelque chose s'est mal passé";
	res.status(err.statusCode).json({
		status: err.statusCode,
		message: err.message,
		stack: process.env.NODE_ENV === "dev" ? err.stack : {},
	});
}

export default errorHandler;

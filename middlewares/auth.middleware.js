import jwt from "jsonwebtoken";

function authenticateToken(req, res, next) {
	const cookies = req.headers.cookie;
	if (!cookies) return res.status(401).json({ message: "Accès refusé" });

	const token = cookies
		.split(";")
		.find((cookie) => cookie.trim().startsWith("token="));
	if (!token) return res.status(401).json({ message: "Accès refusé" });

	const actualToken = token.split("=")[1];

	jwt.verify(actualToken, process.env.JWT_SECRET, (err) => {
		if (err) {
			console.error(err);
			return res.status(403).json({ message: "token invalide" });
		}
		next();
	});
}

export default authenticateToken;

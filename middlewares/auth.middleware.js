import jwt from "jsonwebtoken";

function authenticateToken(roles) {
	return function (req, res, next) {
		const cookies = req.headers.cookie;

		const token = cookies
			.split(";")
			.find((cookie) => cookie.trim().startsWith("token="));
		if (!token) return res.status(401).json({ message: "Accès refusé" });

		const actualToken = token.split("=")[1];

		if (!actualToken) {
			return res.status(401).send("Accès refusé, token manquant");
		}

		try {
			const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);
			if (roles.includes(decoded.role[0])) {
				next();
			} else {
				res.status(403).send("Accès refusé, mauvais rôle");
			}
		} catch (err) {
			res.status(400).send("Token invalide");
		}
	};
}

export default authenticateToken;

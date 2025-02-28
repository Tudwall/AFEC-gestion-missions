import VolunteerService from "../services/volunteer.service.js";

class VolunteerController {
	constructor() {
		this.volunteerService = new VolunteerService();
	}

	async createVolunteer(req, res) {
		const { name, surname, email, pwd } = req.body;
		try {
			const newVolunteer = await this.volunteerService.createVolunteer({
				name,
				surname,
				email,
				pwd,
			});
			res.status(201).json(newVolunteer);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}

	async loginVolunteer(req, res) {
		if (!req.body.email || !req.body.pwd) {
			res.json({ message: "mot de passe et email requis" });
		}
		const { email, pwd } = req.body;
		try {
			const volunteerToken = await this.volunteerService.loginVolunteer({
				email,
				pwd,
			});
			res.cookie("token", volunteerToken, {
				httpOnly: true,
				secure: process.env.NODE_ENV === "production",
				sameSite: "Strict",
				expires: new Date(Date.now() + 3600000),
			});
			res.status(200).json({ message: "Connexion réussie" });
		} catch (err) {
			res.status(401).json({ message: "Identifiants incorrects" });
		}
	}
}

export default VolunteerController;

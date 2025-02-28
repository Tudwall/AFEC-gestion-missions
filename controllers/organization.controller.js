import OrganizationService from "../services/organization.service.js";

class OrganizationController {
	constructor() {
		this.organizationService = new OrganizationService();
	}

	async createOrganization(req, res) {
		const { name, email, pwd } = req.body;
		try {
			const newOrg = await this.organizationService.createOrganization({
				name,
				email,
				pwd,
			});
			res.status(201).json(newOrg);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}
  
	async loginOrganization(req, res) {
		if (!req.body.email || !req.body.pwd) {
			res.json({ message: "mot de passe et email requis" });
		}
		const { email, pwd } = req.body;
		try {
			const organizationToken =
				await this.organizationService.loginOrganization({ email, pwd });
			if (!organizationToken) {
				throw new Error("Identifiants incorrects");
			} else {
				res.cookie("token", organizationToken, {
					httpOnly: true,
					secure: process.env.NODE_ENV === "production",
					sameSite: "Strict",
					expires: new Date(Date.now() + 3600000),
				});
				res.status(200).json({ message: "Connexion réussie" });
			}
		} catch (err) {
			res.status(401).json(err.message);
		}
	}
}

export default OrganizationController;

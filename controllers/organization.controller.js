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
}

export default OrganizationController;

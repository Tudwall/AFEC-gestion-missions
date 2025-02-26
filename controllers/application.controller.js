import ApplicationService from "../services/application.service.js";

class ApplicationController {
	constructor() {
		this.applicationService = new ApplicationService();
	}

	async createApplication(req, res) {
		const { missionId, volunteerId } = req.body;
		try {
			const newApplication = await this.applicationService.createApplication({
				missionId,
				volunteerId,
			});
			res.status(201).json({ newApplication });
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}
}

export default ApplicationController;

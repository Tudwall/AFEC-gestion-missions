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

	async getApplicationsByMissionId(req, res) {
		const { missionId } = req.params;
		try {
			const applications =
				await this.applicationService.getApplicationsByMissionId(missionId);
			res.status(200).json(applications);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}
}

export default ApplicationController;

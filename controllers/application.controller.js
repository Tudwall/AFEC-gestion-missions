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

	async getApplicationById(req, res) {
		const { id } = req.params;
		try {
			const application = await this.applicationService.getApplicationById(id);
			res.status(200).json(application);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}

	async updateApplicationStatus(req, res) {
		const { id } = req.params;
		const { status } = req.body;
		try {
			const updatedApplication =
				await this.applicationService.updateApplicationStatus(id, status);
			res.status(200).json(updatedApplication);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}
}

export default ApplicationController;

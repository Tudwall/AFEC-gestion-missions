import MissionService from "../services/mission.service.js";

class MissionController {
	constructor() {
		this.missionService = new MissionService();
	}

	async createMission(req, res) {
		const { title, missionDetails, missionDate, orgId } = req.body;
		try {
			const newMission = await this.missionService.createMission({
				title,
				missionDetails,
				missionDate,
				orgId,
			});
			res.status(201).json(newMission);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}
}
export default MissionController;

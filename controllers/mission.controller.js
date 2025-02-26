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

	async getMissionsByOrgId(req, res) {
		const { orgId } = req.params;
		try {
			const missions = await this.missionService.getMissionsByOrgId(orgId);
			res.status(200).json(missions);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}

	async getMissionById(req, res) {
		const { id } = req.params;
		try {
			const mission = await this.missionService.getMissionById(id);
			res.status(200).json(mission);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}

	async updateMission(req, res) {
		const { id } = req.params;
		const { title, missionDetails, orgId } = req.body;
		try {
			const updatedMission = await this.missionService.updateMission(id, {
				title,
				missionDetails,
				orgId,
			});
			res.status(200).json(updatedMission);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}

	async deleteMission(req, res) {
		const { id } = req.params;
		try {
			const deletedMission = await this.missionService.deleteMission(id);
			res.status(200).json(deletedMission);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}
}

export default MissionController;

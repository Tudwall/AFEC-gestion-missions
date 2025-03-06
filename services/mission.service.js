import MissionRepository from "../repositories/mission.repository.js";

class MissionService {
	constructor() {
		this.missionRepository = new MissionRepository();
	}

	async createMission({ title, missionDetails, missionDate, orgId }) {
		try {
			return await this.missionRepository.createMission({
				title,
				missionDetails,
				missionDate,
				orgId,
			});
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async getAllMissions() {
		try {
			return await this.missionRepository.getAllMissions();
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async getMissionsByOrgId(orgId) {
		try {
			return await this.missionRepository.getMissionsByOrgId(orgId);
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async getMissionById(id) {
		try {
			return await this.missionRepository.getMissionById(id);
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async updateMission(id, { title, missionDetails, orgId }) {
		try {
			return await this.missionRepository.updateMission(id, {
				title,
				missionDetails,
				orgId,
			});
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async deleteMission(id) {
		try {
			return await this.missionRepository.deleteMission(id);
		} catch (err) {
			throw new Error(err.message);
		}
	}
}

export default MissionService;

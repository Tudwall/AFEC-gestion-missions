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

	async getMissionsByOrgId(orgId) {
		try {
			return await this.missionRepository.getMissionsByOrgId(orgId);
		} catch (err) {
			throw new Error(err.message);
		}
	}
}

export default MissionService;

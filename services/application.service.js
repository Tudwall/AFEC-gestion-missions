import ApplicationRepository from "../repositories/application.repository.js";
import createSQLDate from "../utils/date.js";

class ApplicationService {
	constructor() {
		this.applicationRepository = new ApplicationRepository();
	}

	async createApplication({ missionId, volunteerId }) {
		try {
			return await this.applicationRepository.createApplication({
				missionId,
				volunteerId,
				createdOn: createSQLDate(),
			});
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async getApplicationsByMissionId(missionId) {
		try {
			return await this.applicationRepository.getApplicationsByMissionId(
				missionId
			);
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async getApplicationById(id) {
		try {
			return await this.applicationRepository.getApplicationById(id);
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async updateApplicationStatus(id, status) {
		try {
			console.log(status);
			if (!["En attente", "Acceptée", "Refusée"].includes(status)) {
				throw new Error("status invalide");
			}
			return await this.applicationRepository.updateApplicationStatus(id, {
				status,
				updatedOn: createSQLDate(),
			});
		} catch (err) {
			throw new Error(err.message);
		}
	}
}

export default ApplicationService;

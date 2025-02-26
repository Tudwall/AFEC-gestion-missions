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
}

export default ApplicationService;

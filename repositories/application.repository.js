import pool from "../config/db.config.js";

class ApplicationRepository {
	constructor() {
		this.pool = pool();
	}

	async createApplication({ missionId, volunteerId, createdOn }) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const newApplication = await conn.query(
				"INSERT INTO application (missionId, volunteerId, createdOn) VALUES (?, ?, ?) RETURNING *",
				[missionId, volunteerId, createdOn]
			);
			return newApplication;
		} catch (err) {
			throw new Error("Erreur lors de la création de la candidature: " + err);
		}
	}

	async getApplicationsByMissionId(missionId) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const applications = await conn.query(
				"SELECT * FROM application WHERE missionId = ?",
				[missionId]
			);
			return applications || null;
		} catch (err) {
			throw new Error(
				`Erreur lors de la récupération de la candidature liée à ${missionId}: ${err}`
			);
		} finally {
			if (conn) conn.release();
		}
	}
}

export default ApplicationRepository;

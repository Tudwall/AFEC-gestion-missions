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
			return newApplication[0];
		} catch (err) {
			throw new Error("Erreur lors de la création de la candidature: " + err);
		} finally {
			if (conn) conn.release();
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

	async getApplicationById(id) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const application = await conn.query(
				"SELECT * FROM application WHERE id = ?",
				[id]
			);
			return application[0] || null;
		} catch (err) {
			throw new Error(
				`Erreur lors de la récupération de la candidature ${id}: ${err}`
			);
		} finally {
			if (conn) conn.release();
		}
	}

	async updateApplicationStatus(id, { status, updatedOn }) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			await conn.query(
				"UPDATE application SET status = ?, updatedOn = ? WHERE id = ?",
				[status, updatedOn, id]
			);
			return this.getApplicationById(id);
		} catch {
			throw new Error(
				`Erreur lors de la modification du status de la candidature ${id}: ${err}`
			);
		} finally {
			if (conn) conn.release();
		}
	}

	async deleteApplication(id, { updatedOn }) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			await conn.query(
				"UPDATE application SET isDeleted = 1, updatedOn = ? WHERE id = ?",
				[updatedOn, id]
			);
			return "Candidature supprimée avec succès";
		} catch (err) {
			throw new Error(
				`Erreur lors de la suppression de la candidature ${id}: ${err}`
			);
		} finally {
			if (conn) conn.release();
		}
	}
}

export default ApplicationRepository;

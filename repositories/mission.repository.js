import pool from "../config/db.config.js";

class MissionRepository {
	constructor() {
		this.pool = pool();
	}
	async createMission({ title, missionDetails, missionDate, orgId }) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const newMission = await conn.query(
				"INSERT INTO mission (title, missionDetails, missionDate, orgId) VALUES (?, ?, ?, ?) RETURNING *",
				[title, missionDetails, missionDate, orgId]
			);
			return newMission;
		} catch (err) {
			throw new Error("Erreur lors de la création de la mission: " + err);
		} finally {
			if (conn) conn.release();
		}
	}
}

export default MissionRepository;

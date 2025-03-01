import pool from "../config/db.config.js";

class MissionRepository {
	constructor() {
		this.pool = pool();
	}

	async createMission({
		title,
		missionDetails,
		missionDate,
		orgId,
		createdOn,
	}) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const newMission = await conn.query(
				"INSERT INTO mission (title, missionDetails, missionDate, orgId, createdOn) VALUES (?, ?, ?, ?, ?) RETURNING *",
				[title, missionDetails, missionDate, orgId, createdOn]
			);
			return newMission[0];
		} catch (err) {
			console.error(err);
			throw new Error("Erreur lors de la création de la mission: " + err);
		} finally {
			if (conn) conn.release();
		}
	}

	async getAllMissions() {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const missions = await conn.query(
				"SELECT * FROM mission WHERE isDeleted = 0"
			);
			return missions || null;
		} catch (err) {
			console.error(err);
			throw new Error(`Erreur lors de la récupération des missions: ${err}`);
		} finally {
			if (conn) conn.release();
		}
	}

	async getMissionsByOrgId(orgId) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const missions = await conn.query(
				"SELECT * FROM mission WHERE orgId = ? AND isDeleted = 0",
				[orgId]
			);
			return missions || null;
		} catch (err) {
			console.error(err);
			throw new Error(
				`Erreur lors de la récupération des missions de l'association ${orgId}: ${err}`
			);
		} finally {
			if (conn) conn.release();
		}
	}

	async getMissionById(id) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const mission = await conn.query("SELECT * FROM mission WHERE id = ?", [
				id,
			]);
			return mission[0] || null;
		} catch (err) {
			console.error(err);
			throw new Error(
				`Erreur lors de la récupération de la mission ${id} ${err}`
			);
		} finally {
			if (conn) conn.release();
		}
	}

	async updateMission(id, { title, missionDetails, orgId, updatedOn }) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			await conn.query(
				"UPDATE mission SET title = ?, missionDetails = ?, orgId = ?, updatedOn = ? WHERE id = ?",
				[title, missionDetails, orgId, updatedOn, id]
			);

			return this.getMissionById(id);
		} catch (err) {
			console.error(err);
			throw new Error(
				`Erreur lors de la modification de la mission ${id} ${err}`
			);
		} finally {
			if (conn) conn.release();
		}
	}

	async deleteMission(id, { updatedOn }) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			await conn.query(
				"UPDATE mission SET isDeleted = 1, updatedOn = ? WHERE id = ?",
				[updatedOn, id]
			);
			return "Mission supprimée avec succès";
		} catch (err) {
			console.error(err);
			throw new Error(
				`Erreur lors de la suppression de la mission ${id}: ${err}`
			);
		} finally {
			if (conn) conn.release();
		}
	}
}

export default MissionRepository;

import pool from "../config/db.config.js";

class VolunteerRepository {
	constructor() {
		this.pool = pool();
	}

	async createVolunteer({ name, surname, email, pwd, createdOn }) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const newVolunteer = await conn.query(
				"INSERT INTO volunteer (name, surname, email, pwd, createdOn) VALUES (?, ?, ?, ?, ?) RETURNING id, name, surname, email, createdOn",
				[name, surname, email, pwd, createdOn]
			);
			return newVolunteer;
		} catch (err) {
			throw new Error(`Erreur lors de l'inscription: ${err}`);
		} finally {
			if (conn) conn.release();
		}
	}

	async getVolunteerByEmail(email) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const volunteer = await conn.query(
				"SELECT * FROM volunteer WHERE email = ?",
				[email]
			);
			return volunteer[0] || null;
		} catch (err) {
			throw new Error(
				`Erreur lors de la récupération de l'utilisateur: ${err}`
			);
		} finally {
			if (conn) conn.release();
		}
	}
}

export default VolunteerRepository;

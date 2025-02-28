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
		}
	}
}

export default VolunteerRepository;

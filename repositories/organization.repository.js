import pool from "../config/db.config.js";

class OrganizationRepository {
	constructor() {
		this.pool = pool();
	}

	async createOrganization({ name, email, pwd, createdOn }) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const newOrg = await conn.query(
				"INSERT INTO organization (name, email, pwd, createdOn) VALUES (?, ?, ?, ?) RETURNING name, email, createdOn",
				[name, email, pwd, createdOn]
			);
			return newOrg[0];
		} catch (err) {
			throw new Error(`Erreur lors de l'inscription: ${err}`);
		} finally {
			if (conn) conn.release();
		}
	}
}

export default OrganizationRepository;

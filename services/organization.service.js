import OrganizationRepository from "../repositories/organization.repository.js";
import createSQLDate from "../utils/date.js";
import argon2 from "argon2";

class OrganizationService {
	constructor() {
		this.organizationRepository = new OrganizationRepository();
	}

	async createOrganization({ name, email, pwd }) {
		try {
			const hashedPwd = await argon2.hash(pwd, { type: argon2.argon2d });
			return await this.organizationRepository.createOrganization({
				name,
				email,
				pwd: hashedPwd,
				createdOn: createSQLDate(),
			});
		} catch (err) {
			throw new Error(err.message);
		}
	}
}

export default OrganizationService;

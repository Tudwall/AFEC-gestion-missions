import OrganizationRepository from "../repositories/organization.repository.js";
import createSQLDate from "../utils/date.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

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

	async loginOrganization({ email, pwd }) {
		try {
			const user = await this.organizationRepository.getOrganizationByEmail(
				email
			);
			if (!user || !(await argon2.verify(user.pwd, pwd))) {
				throw new Error("Identifiants incorrects");
			}
			const token = jwt.sign(
				{ email: user.email, role: ["organization"] },
				process.env.JWT_SECRET,
				{
					expiresIn: "1h",
				}
			);
			return token;
		} catch (err) {
			console.error(err);
		}
	}
}

export default OrganizationService;

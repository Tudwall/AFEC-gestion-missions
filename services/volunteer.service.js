import VolunteerRepository from "../repositories/volunteer.repository.js";
import createSQLDate from "../utils/date.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

class VolunteerService {
	constructor() {
		this.volunteerRepository = new VolunteerRepository();
	}

	async createVolunteer({ name, surname, email, pwd }) {
		try {
			const hashedPwd = await argon2.hash(pwd, { type: argon2.argon2d });
			return await this.volunteerRepository.createVolunteer({
				name,
				surname,
				email,
				pwd: hashedPwd,
				createdOn: createSQLDate(),
			});
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async loginVolunteer({ email, pwd }) {
		try {
			const user = await this.volunteerRepository.getVolunteerByEmail(email);
			if (!user || !(await argon2.verify(user.pwd, pwd))) {
				throw new Error("Identifiants incorrects");
			}
			const token = jwt.sign(
				{ email: user.email, role: "volunteer" },
				process.env.JWT_SECRET,
				{
					expiresIn: "1h",
				}
			);
			return token;
		} catch (err) {
			return err;
		}
	}
}

export default VolunteerService;

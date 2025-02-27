import VolunteerRepository from "../repositories/volunteer.repository.js";
import createSQLDate from "../utils/date.js";
import argon2 from "argon2";

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
}

export default VolunteerService;

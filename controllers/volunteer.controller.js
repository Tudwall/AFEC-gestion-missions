import VolunteerService from "../services/volunteer.service.js";

class VolunteerController {
	constructor() {
		this.volunteerService = new VolunteerService();
	}

	async createVolunteer(req, res) {
		const { name, surname, email, pwd } = req.body;
		try {
			const newVolunteer = await this.volunteerService.createVolunteer({
				name,
				surname,
				email,
				pwd,
			});
			res.status(201).json(newVolunteer);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}
}

export default VolunteerController;

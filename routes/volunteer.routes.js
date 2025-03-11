import express from "express";
import VolunteerController from "../controllers/volunteer.controller.js";
import validate from "../validate.js";
import { userSchema } from "../validator.js";

const router = express.Router();
const volunteerController = new VolunteerController();

router.post("/register", validate(userSchema), (req, res) =>
	volunteerController.createVolunteer(req, res)
);
router.post("/login", (req, res) =>
	volunteerController.loginVolunteer(req, res)
);

export default router;

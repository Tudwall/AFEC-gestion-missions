import express from "express";
import VolunteerController from "../controllers/volunteer.controller.js";

const router = express.Router();
const volunteerController = new VolunteerController();

router.post("/register", (req, res) =>
	volunteerController.createVolunteer(req, res)
);
router.post("/login", (req, res) =>
	volunteerController.loginVolunteer(req, res)
);

export default router;

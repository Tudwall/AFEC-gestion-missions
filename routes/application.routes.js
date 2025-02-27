import express from "express";
import ApplicationController from "../controllers/application.controller.js";

const router = express.Router();
const applicationController = new ApplicationController();

router.post("/create", (req, res) =>
	applicationController.createApplication(req, res)
);
router.get("/missionId/:missionId", (req, res) =>
	applicationController.getApplicationsByMissionId(req, res)
);

export default router;

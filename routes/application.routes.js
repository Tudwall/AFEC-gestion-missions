import express from "express";
import ApplicationController from "../controllers/application.controller.js";
import authenticateToken from "../middlewares/auth.middleware.js";

const router = express.Router();
const applicationController = new ApplicationController();

router.post("/create", authenticateToken("volunteer"), (req, res) =>
	applicationController.createApplication(req, res)
);

router.get(
	"/missionId/:missionId",
	authenticateToken(["volunteer", "organization"]),
	(req, res) => applicationController.getApplicationsByMissionId(req, res)
);

router.get(
	"/id/:id",
	authenticateToken(["volunteer", "organization"]),
	(req, res) => applicationController.getApplicationById(req, res)
);

router.patch("/update/:id", authenticateToken(["organization"]), (req, res) =>
	applicationController.updateApplicationStatus(req, res)
);

router.delete("/delete/:id", authenticateToken(["volunteer"]), (req, res) =>
	applicationController.deleteApplication(req, res)
);

export default router;

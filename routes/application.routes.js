import express from "express";
import ApplicationController from "../controllers/application.controller.js";
import authenticateToken from "../middlewares/auth.middleware.js";

const router = express.Router();
const applicationController = new ApplicationController();

router.post("/create", authenticateToken, (req, res) =>
	applicationController.createApplication(req, res)
);
router.get("/missionId/:missionId", (req, res) =>
	applicationController.getApplicationsByMissionId(req, res)
);
router.get("/id/:id", (req, res) =>
	applicationController.getApplicationById(req, res)
);
router.patch("/update/:id", (req, res) =>
	applicationController.updateApplicationStatus(req, res)
);
router.delete("/delete/:id", (req, res) =>
	applicationController.deleteApplication(req, res)
);

export default router;

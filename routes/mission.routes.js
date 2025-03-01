import express from "express";
import MissionController from "../controllers/mission.controller.js";
import authenticateToken from "../middlewares/auth.middleware.js";

const router = express.Router();
const missionController = new MissionController();

router.post("/create", authenticateToken(["organization"]), (req, res) =>
	missionController.createMission(req, res)
);

router.get("/", authenticateToken(["volunteer", "organization"]), (req, res) =>
	missionController.getAllMissions(req, res)
);

router.get(
	"/orgId/:orgId",
	authenticateToken(["volunteer", "organization"]),
	(req, res) => missionController.getMissionsByOrgId(req, res)
);
router.get(
	"/id/:id",
	authenticateToken(["volunteer", "organization"]),
	(req, res) => missionController.getMissionById(req, res)
);

router.patch("/update/:id", authenticateToken(["organization"]), (req, res) =>
	missionController.updateMission(req, res)
);
router.delete("/delete/:id", authenticateToken(["organization"]), (req, res) =>
	missionController.deleteMission(req, res)
);
export default router;

import express from "express";
import MissionController from "../controllers/mission.controller.js";

const router = express.Router();
const missionController = new MissionController();

router.post("/create", (req, res) => missionController.createMission(req, res));
router.get("/orgId/:orgId", (req, res) =>
	missionController.getMissionsByOrgId(req, res)
);

export default router;

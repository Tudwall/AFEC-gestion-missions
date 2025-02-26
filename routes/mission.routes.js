import express from "express";
import MissionController from "../controllers/mission.controller.js";

const router = express.Router();
const missionController = new MissionController();

router.post("/create", (req, res) => missionController.createMission(req, res));
router.get("/orgId/:orgId", (req, res) =>
	missionController.getMissionsByOrgId(req, res)
);
router.get("/id/:id", (req, res) => missionController.getMissionById(req, res));
router.patch("/update/:id", (req, res) =>
	missionController.updateMission(req, res)
);
export default router;

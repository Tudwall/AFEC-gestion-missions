import express from "express";
import OrganizationController from "../controllers/organization.controller.js";

const router = express.Router();
const organizationController = new OrganizationController();

router.post("/register", (req, res) =>
	organizationController.createOrganization(req, res)
);

export default router;

import express from "express";
import OrganizationController from "../controllers/organization.controller.js";
import validate from "../validate.js";
import { userSchema } from "../validator.js";

const router = express.Router();
const organizationController = new OrganizationController();

router.post("/register", validate(userSchema), (req, res) =>
	organizationController.createOrganization(req, res)
);

router.post("/login", (req, res) =>
	organizationController.loginOrganization(req, res)
);

export default router;

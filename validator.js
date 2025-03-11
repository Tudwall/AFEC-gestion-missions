import joi from "joi";

const authSchema = joi.object({
	email: joi.string().email().required(),
	pwd: joi
		.string()
		.min(6)
		.max(100)
		.required()
		.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
		.strip(),
});

const userSchema = joi.object({
	name: joi.string().required().max(100).required(),
	email: joi
		.string()
		.required()
		.max(100)
		.email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "fr"] } }),
	surname: joi.string().max(100),
	pwd: joi
		.string()
		.min(6)
		.max(100)
		.required()
		.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
		.strip(),
});

const missionSchema = joi.object({
	title: joi.string().min(5).max(250).required(),
	missionDetails: joi.string().min(5).max(2000).required(),
	missionDate: joi.date().timestamp().required(),
	orgId: joi.number().integer().positive().required(),
});

const applicationSchema = joi.object({
	status: joi.string().required().allow("En attente", "Acceptée", "Refusée"),
	missionId: joi.number().integer().positive().required(),
	volunteerId: joi.number().integer().positive().required(),
});

export { authSchema, userSchema, missionSchema, applicationSchema };

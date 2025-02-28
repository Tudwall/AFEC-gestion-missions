import express from "express";
import "dotenv/config";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./doc/swagger.json" with {type: "json"};
import missionRoutes from "./routes/mission.routes.js";
import applicationRoutes from "./routes/application.routes.js";
import volunteerRoutes from "./routes/volunteer.routes.js";
import organizationRoutes from "./routes/organization.routes.js";

const PORT = process.env.PORT;
const app = express();

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(express.json());
app.use("/mission", missionRoutes);
app.use("/application", applicationRoutes);
app.use("/volunteer", volunteerRoutes);
app.use("/org", organizationRoutes);

app.listen(PORT, () => console.info(`server is running on ${PORT}`));

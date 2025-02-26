import express from "express";
import "dotenv/config";
import missionRoutes from "./routes/mission.routes.js";
import applicationRoutes from "./routes/application.routes.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use("/mission", missionRoutes);
app.use("/application", applicationRoutes);

app.listen(PORT, () => console.info(`server is running on ${PORT}`));

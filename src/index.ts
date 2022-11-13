import { validateEnv } from "./utils/validator";
import dotenv from "dotenv";
import * as app from "./app.js";
import getSystemConfigs from "./utils/config/system.config";
import System from "./utils/interface/system.interface";

import DataBase from "./utils/interface/database.interface";
import getDataBaseConfig from "./utils/config/database.config";

dotenv.config(); // setting up environment variable
validateEnv();

const system: System = getSystemConfigs();

(async function () {
	app.configureServer(system.mode);
	// await app.connectDB();
	app.configureRouter(system.baseUrl);
	app.startServer(system.port);
})();

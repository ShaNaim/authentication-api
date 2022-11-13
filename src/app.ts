import cors from "cors";
import express, { Application } from "express";
import { requestLogger, serverStartLogger, unknownDatabaseError } from "./utils/common";
import dbInit from "./db/init";
import routers from "./routers/index";

const app: Application = express();

export function configureServer(serverMode: string): void {
	try {
		app.use(cors()); // setting up cross site origin
		app.use(express.json()); // setting up req body type decoder
		// app.use(express.urlencoded({ extended: true }));
		if (serverMode === "development" || serverMode === "test") app.use(requestLogger);
	} catch (error) {
		console.error(" Failed while Configuring Server =>", error);
		process.exit(1);
	}
}

export async function connectDB(): Promise<void> {
	try {
		console.log("Connecting DataBase...");
		await dbInit();
		console.log("Database Connected successfully");
	} catch (error: any) {
		console.error(" Failed while Connecting To DataBase =>", error.original);
		if (error.original.errno === 1049) {
			unknownDatabaseError();
		}
		process.exit(1);
	}
}

export function configureRouter(api_entry: string): void {
	app.get("/", (req, res) => {
		res
			.status(200)
			.json(`Welcome To Hishab kitab API , API end points are available at : ${api_entry}`);
	});
	app.use(api_entry, routers);
}

export function startServer(PORT: number): void {
	try {
		app.listen(PORT, () => {
			serverStartLogger();
		});
	} catch (error) {
		console.error(" Failed while Starting Server =>", error);
		process.exit(1);
	}
}

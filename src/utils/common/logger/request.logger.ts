import { Request, Response, NextFunction } from "express";
import logColors from "./logger.helper";

const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
	console.log(
		`REQ::${logColors.FgYellow} ${req.get("origin")}${logColors.Reset}::=>${logColors.FgRed}${
			req.method
		}${logColors.Reset} => ${logColors.FgCyan}${req.originalUrl}${logColors.Reset} :: ${new Date()}`
	);
	next();
};

export default requestLogger;

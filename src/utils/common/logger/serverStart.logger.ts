import logColors from "./logger.helper";

const serverStartLogger = (): void => {
	console.log(
		`⚡️[server]: Server is running in ${
			process.env.NODE_ENV == "development" ? logColors.FgMagenta : logColors.FgGreen
		}${process.env.NODE_ENV}${logColors.Reset} mode at ${logColors.FgCyan}https://localhost:${
			process.env.PORT
		}/api/v/${process.env.API_VERSION}/${logColors.Reset} 🎉`
	);
};
export default serverStartLogger;

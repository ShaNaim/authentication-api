import logColors from "./logger.helper";

function unknownDatabaseError() {
	console.log(`
    ${logColors.FgYellow}---------------------------------------------------------${logColors.Reset}
     ${logColors.Bright}No Database with the given name was found , 
     Create a Database with the same name 
     if already created , check if the database names match${logColors.Reset}
    ${logColors.FgYellow}---------------------------------------------------------${logColors.Reset}
    `);
}

export default unknownDatabaseError;

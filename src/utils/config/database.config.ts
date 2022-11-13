import { Dialect } from "sequelize";
import DataBase from "../interface/database.interface";

function getDataBaseConfig(): DataBase {
	const isTest = process.env.NODE_ENV === "test" || process.env.NODE_ENV === "development";
	const database: DataBase = {
		name: isTest ? (process.env.TEST_DB_NAME as string) : (process.env.DB_NAME as string),
		user: process.env.DB_USER as string,
		password: process.env.DB_PASSWORD as string,
		host: process.env.DB_HOST as string,
		driver: process.env.DB_DRIVER as Dialect,
	};
	return database;
}

export default getDataBaseConfig;

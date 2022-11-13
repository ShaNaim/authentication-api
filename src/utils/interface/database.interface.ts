import { Dialect } from "sequelize";

interface DataBase {
	name: string;
	user: string;
	password: string;
	host: string;
	driver: Dialect;
}

export default DataBase;

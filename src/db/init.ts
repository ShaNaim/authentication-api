require("dotenv").config();

import { User, Person } from "./models";

const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV !== "test";

const dbInit = () =>
	Promise.all([
		Person.sync({ alter: isDev || isTest }),
		User.sync({ force: true, alter: isDev || isTest }),
	]);

export default dbInit;

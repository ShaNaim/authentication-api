import { cleanEnv, str, port, num, makeValidator } from "envalid";

const atleatOneChar = makeValidator((x) => {
	if (x !== "") return x.toUpperCase();
	else throw new Error("Field can't be Empty and must be of type String");
});

function validateEnv(): void {
	cleanEnv(process.env, {
		NODE_ENV: str({
			choices: ["development", "production", "test"],
		}),
		PORT: port({ default: 3000 }),
		API_VERSION: num({ default: 0 }),
		DB_NAME: atleatOneChar(),
		TEST_DB_NAME: str(),
		DB_USER: atleatOneChar(),
		DB_HOST: str({ default: "localhost" }),
		DB_DRIVER: str({
			choices: ["mysql", "postgres", "sqlite", "mariadb", "mssql", "db2", "snowflake", "oracle"],
		}),
		DB_PASSWORD: str(),
	});
}

export default validateEnv;

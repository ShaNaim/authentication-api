import { Optional } from "sequelize";

interface User {
	id: string;
	email: string;
	password: string;
}

export interface UserAttributes extends Required<User> {
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, "id"> {}

export interface UserOutput extends Required<UserAttributes> {}

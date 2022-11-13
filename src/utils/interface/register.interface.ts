import { Optional } from "sequelize";

interface Register {
	email: string;
	firstName: string;
	lastName?: string;
	contact: number;
	address?: string;
}

export interface RegisterInput extends Required<Register> {
	password: string;
}

export interface RegisterOutput extends Required<Register> {
	id: string;
}

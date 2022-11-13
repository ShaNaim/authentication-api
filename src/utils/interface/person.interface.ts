import { Optional } from "sequelize";

interface Person {
	id: string;
	firstName: string;
	middleName?: string;
	lastName?: string;
	contact: number;
}

export interface PersonAttributes extends Required<Person> {
	// foreign key
	userId: string;
	// timestamps
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}

export interface PersonInput extends Optional<PersonAttributes, "id"> {}
export interface PersonOutput extends Required<PersonAttributes> {}

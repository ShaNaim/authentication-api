import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";
import { PersonAttributes, PersonInput } from "../../utils/interface/person.interface";
import { User } from ".";

class Person extends Model<PersonAttributes, PersonInput> implements PersonAttributes {
	public id!: string;
	public firstName!: string;
	public contact!: number;
	public middleName!: string;
	public lastName!: string;

	// foreign key
	public userId!: string;

	// timestamps!
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
	public readonly deletedAt!: Date;
}

Person.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		userId: {
			type: DataTypes.UUID,
			references: {
				model: User,
				key: "id",
			},
		},
		firstName: {
			type: DataTypes.STRING,
		},
		lastName: {
			type: DataTypes.STRING,
		},
		middleName: {
			type: DataTypes.STRING,
		},
		contact: {
			type: DataTypes.INTEGER,
		},
	},
	{
		sequelize: sequelizeConnection,
		paranoid: true,
		timestamps: true,
	}
);
export default Person;

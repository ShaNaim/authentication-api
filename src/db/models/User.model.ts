import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";
import { UserAttributes, UserInput } from "../../utils/interface/user.interface";

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
	public id!: string;
	public email!: string;
	public password!: string;

	// timestamps!
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
	public readonly deletedAt!: Date;
}

User.init(
	{
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
	},
	{
		sequelize: sequelizeConnection,
		paranoid: true,
		timestamps: true,
	}
);

export default User;

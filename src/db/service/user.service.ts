import { kebabCase } from "lodash";
import { UserInput, UserOutput } from "../../utils/interface/user.interface";
import * as UserModel from "../dal/User.dal";

export async function createUser(payload: UserInput): Promise<UserOutput> {
	try {
		const newUser = await UserModel.create(payload);

		return newUser;
	} catch (error) {
		throw error;
	}
}

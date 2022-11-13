import { Op } from "sequelize";
import { isEmpty } from "lodash";

import { User } from "../models";
import { UserInput, UserOutput } from "../../utils/interface/user.interface";

async function findById(id: string): Promise<UserOutput | null> {
	const existingUser = await User.findByPk(id);

	return existingUser;
}

async function findByEmail(email: string): Promise<UserOutput | null> {
	const existingUser = await User.findOne({
		where: {
			email,
		},
	});

	if (!existingUser) {
		throw new Error("not found");
	}

	return existingUser;
}

export const create = async (payload: UserInput): Promise<UserOutput> => {
	try {
		const newUser = await User.create(payload);
		return newUser;
	} catch (error) {
		throw error;
	}
};

export const checkUserExists = async (id: string): Promise<boolean> => {
	try {
		const existingUser = await findById(id);
		return !isEmpty(existingUser);
	} catch (error) {
		throw error;
	}
};

export const updateUser = async (id: string, payload: Partial<UserInput>): Promise<UserOutput> => {
	try {
		const targetUser = await User.findByPk(id);
		if (!targetUser) {
			throw new Error("not found");
		}
		const updatedUser = await targetUser.update(payload);
		return updatedUser;
	} catch (error) {
		throw error;
	}
};

export const deleteById = async (id: number): Promise<boolean> => {
	const deletedUserCount = await User.destroy({
		where: { id },
	});

	return !!deletedUserCount;
};

export const getUserbyId = async (credential: string): Promise<UserOutput> => {
	const targetUser = await findById(credential);
	if (!targetUser) {
		throw Error("Not Found");
	}
	return targetUser;
};

export const getUserbyEmail = async (email: string): Promise<UserOutput> => {
	const targetUser = await findByEmail(email);
	if (!targetUser) {
		throw Error("Not Found");
	}
	return targetUser;
};

// export const getAll = async (filters?: GetAllUsersFilter): Promise<UserOutput[]> => {
// 	return await User.findAll({
// 		where: {
// 			...(filters?.isDeleted && { deletedAt: { [Op.not]: null } }),
// 		},
// 		...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true }),
// 	});
// };

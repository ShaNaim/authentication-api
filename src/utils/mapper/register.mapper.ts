import { RegisterOutput, RegisterInput } from "../interface/register.interface";

export function toRegisterInput(payload: any): RegisterInput {
	return {
		email: payload.email,
		password: payload.password,
		firstName: payload.firstName,
		lastName: payload.lastName,
		contact: payload.contact,
		address: payload.address,
	};
}

export function toRegisterOutput(payload: any): RegisterOutput {
	return {
		id: payload.id,
		email: payload.email,
		firstName: payload.firstName,
		lastName: payload.lastName,
		contact: payload.contact,
		address: payload.address,
	};
}

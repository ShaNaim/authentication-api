import { RegisterInput } from "../utils/interface/register.interface";
import { UserInput, UserOutput } from "../utils/interface/user.interface";
export function register(payload: RegisterInput) {
	return { ...payload, id: 1 };
}

import { Request, Response } from "express";
import { registerMapper } from "../utils/mapper";
import { RegisterInput, RegisterOutput } from "../utils/interface/register.interface";
import { authService } from "../services";
export function authTest(req: Request, res: Response): Response {
	return res.status(200).json({
		message: "Congrates you made it AUTH 🎉",
	});
}

export function authLoginTest(req: Request, res: Response): Response {
	return res.status(200).json({
		message: "Congrates you made it LOGIN 🎉",
	});
}

export function authRegisterTest(req: Request, res: Response): Response {
	const registerInput: RegisterInput = registerMapper.toRegisterInput(req.body);

	const registeredUser: RegisterOutput = registerMapper.toRegisterOutput(
		authService.register(registerInput)
	);

	return res.status(200).json({
		success: true,
		error: null,
		data: registeredUser,
	});
}

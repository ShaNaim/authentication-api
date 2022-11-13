import { Request, Response } from "express";

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
	const { email, password, firstName, lastName, contact, address } = req.body;

	return res.status(200).json({
		message: "Congrates you made it to Register 🎉",
	});
}

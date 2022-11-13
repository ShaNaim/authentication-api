import { Response, Request, NextFunction } from "express";

import { inputValidator } from "../../utils/validator";

function valudateRegisterInputes(req: Request, res: Response, next: NextFunction) {
	try {
		const { email, password, firstName, lastName, contact, address } = req.body;
		let validated = [];

		const validatedEmail = inputValidator.validateEmail(email);
		const validatedPassword = inputValidator.validatePassword(password);
		const validatedContact = inputValidator.validateContact(contact);
		const validatedUserName = inputValidator.validateUserName(firstName);

		if (validatedEmail.length !== 0) {
			validated.push(...validatedEmail);
		}
		if (validatedPassword.length !== 0) {
			validated.push(...validatedPassword);
		}
		if (validatedContact.length !== 0) {
			validated.push(...validatedContact);
		}
		if (validatedUserName.length !== 0) {
			validated.push(...validatedUserName);
		}

		if (validated.length !== 0) {
			return res.status(400).json({
				success: false,
				error: validated,
				data: null,
			});
		} else {
			next();
		}
	} catch (error) {
		return res.status(500).json({
			success: false,
			error: error,
			data: null,
		});
	}
}

export default valudateRegisterInputes;

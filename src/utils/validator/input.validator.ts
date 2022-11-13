import * as _ from "lodash";

export const validateEmail = (email: string): Array<InputValidationErrorBody> => {
	let validateted = [];
	if (_.isEmpty(email)) {
		validateted.push(constructMessgae("email", "Email cannot be empty"));
	} else {
		if (
			!String(email)
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				)
		) {
			validateted.push(constructMessgae("email", "Invalid Email Addess"));
		}
	}
	return validateted;
};

export const validatePassword = (password: string): Array<InputValidationErrorBody> => {
	let validateted = [];
	if (_.isEmpty(password)) {
		validateted.push(constructMessgae("password", "Password Must be provided"));
	} else {
		if (password.length < 5) {
			validateted.push(constructMessgae("password", "must be at least 5 chars long"));
		}
	}
	return validateted;
};

export const validateUserName = (userName: string): Array<InputValidationErrorBody> => {
	let validateted = [];
	if (_.isEmpty(userName)) {
		validateted.push(constructMessgae("First Name", "First Name must be provided"));
	}
	return validateted;
};

export const validateContact = (contact: any): Array<InputValidationErrorBody> => {
	try {
		let validateted = [];
		if (_.isEmpty(contact)) {
			validateted.push(constructMessgae("Contact", "Contact must be provided"));
		} else {
			if (!Number(contact)) validateted.push(constructMessgae("Contact", "Invalid Contact"));
		}

		return validateted;
	} catch (error) {
		return [constructMessgae("Contact", "Invalid Contact")];
	}
};

interface InputValidationErrorBody {
	location: string;
	message: string;
}

function constructMessgae(location: string, msg: string) {
	return {
		location,
		message: msg,
	};
}

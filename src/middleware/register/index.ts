import valudateRegisterInputes from "./inputValidator.middleware";

const registerMiddleware = {
	validateInput: valudateRegisterInputes,
};

export default registerMiddleware;

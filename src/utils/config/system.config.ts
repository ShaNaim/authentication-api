import System from "../interface/system.interface";
function getSystemConfigs(): System {
	const system: System = {
		port: Number(process.env.PORT),
		baseUrl: `/api/v/${Number(process.env.API_VERSION)}/`,
		version: Number(process.env.API_VERSION),
		mode: String(process.env.NODE_ENV),
		active: true,
	};
	return system;
}

export default getSystemConfigs;

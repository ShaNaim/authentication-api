require("dotenv").config();
import diff from "microdiff";
import { Dialect, Model, Sequelize } from "sequelize";
import { SequelizeHooks } from "sequelize/types/hooks";
import DataBase from "../utils/interface/database.interface";
import getDataBaseConfig from "../utils/config/database.config";
import localCache from "../lib/local-cache";

const database: DataBase = getDataBaseConfig();

const hooks: Partial<SequelizeHooks<Model<any, any>, any, any>> = {
	afterUpdate: (instance: Model<any, any>) => {
		const cacheKey = `${instance.constructor.name.toLowerCase()}s`;

		const currentData = instance.get({ plain: true });

		if (!localCache.hasKey(cacheKey)) {
			return;
		}

		const listingData = localCache.get<any>(cacheKey) as any[];
		const itemIndex = listingData.findIndex((it) => it.id === instance.getDataValue("id"));
		const oldItemData = ~itemIndex ? listingData[itemIndex] : {};

		const instanceDiff = diff(oldItemData, currentData);

		if (instanceDiff.length > 0) {
			listingData[itemIndex] = currentData;
			localCache.set(cacheKey, listingData);
		}
	},
	afterCreate: (instance: Model<any, any>) => {
		const cacheKey = `${instance.constructor.name.toLowerCase()}s`;
		const currentData = instance.get({ plain: true });

		if (!localCache.hasKey(cacheKey)) {
			return;
		}

		const listingData = localCache.get<any>(cacheKey) as any[];
		listingData.push(currentData);

		localCache.set(cacheKey, listingData);
	},
};

const sequelizeConnection = new Sequelize(database.name, database.user, database.password, {
	host: database.host,
	dialect: database.driver,
	logging: false,
	define: { hooks },
});

export default sequelizeConnection;

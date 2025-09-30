const mongoose = require("mongoose");

const dbUser = process.env.MONGO_USER;
const dbPassword = process.env.MONGO_PASS;
const dbHost = "localhost";
const dbPort = "2718";
const dbName = "wn-tour-website";

const mongoURI = `mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?authSource=admin`;

const mongoAtlasURI = process.env.MONGO_ATLAS_URI;

class Database {
	constructor() {
		this.connect();
	}

	async connect() {
		try {
			await mongoose.connect(mongoAtlasURI);
			console.log("DB connection successful !");
		} catch (error) {
			console.log("DB connection failed !", error);
		}
	}
	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}
		return Database.instance;
	}
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;

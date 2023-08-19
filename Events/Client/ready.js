const mongoose = require('mongoose');
const client = require('../../index.js')
const { logHandler } = require('../../Handlers/logHandler');
require('colors');

const activities = [
	"/help",
	"New Version.",
	"By Luvizar",
	"Look Better"
];

module.exports = {
	name: "ready",
	once: true,
	/**
	 * 
	 * @param {client} client 
	 */
	async execute(client) {
		await mongoose.connect(process.env.MONGO_DB || "", {
			useNewUrlParser: true,
			useUnifiedTopology: true
		}).then(() => {
			logHandler("client", "0", "[MONGODB]");
		}).catch(err => console.log(err));

		setInterval(() => {
			const randomIndex = Math.floor(Math.random() * activities.length);
			const newActivity = activities[randomIndex];

			client.user.setActivity(newActivity);
		}, 15_000);

		logHandler("client", "1", client.user.username);
	}
}
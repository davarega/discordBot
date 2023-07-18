const mongoose = require('mongoose');
const config = require('../../config.json');
require('colors');

module.exports = {
	name: "ready",
	once: true,

	async execute(client, interaction) {
		await mongoose.connect(config.mongodb || "", {
			keepAlive: true,
		});

		if(mongoose.connect)
		console.log('[MONGODB]'.green, "Database connected!");

		console.log(`${client.user.username} is online!`);
	}
}

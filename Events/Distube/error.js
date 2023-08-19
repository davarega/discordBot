
const { logHandler } = require("../../Handlers/logHandler");

module.exports = {
	name: "error",

	async execute(client, channel, err) {
		console.error(err);
		logHandler("error", "2", "Distube", "error", "", err);
	}
};
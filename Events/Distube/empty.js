const { EmbedBuilder } = require("discord.js");

module.exports = {
	name: "empty",

	async execute(client, queue) {
		const embed = new EmbedBuilder().setDescription('\`🚨\` | Voice channel is empty! Leaving the channel...');
		queue.textChannel.send({ embeds: [embed] });
	}
}
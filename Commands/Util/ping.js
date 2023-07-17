const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription("pong!"),

	async execute(interaction) {
		return interaction.reply({ content: "pong!" });
	}
}
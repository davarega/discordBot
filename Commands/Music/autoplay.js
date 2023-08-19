const { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } = require('discord.js');
const client = require('../../index');
const { logHandler } = require('../../Handlers/logHandler');
const { errorEmbed } = require('../../Handlers/messageEmbed');

module.exports = {
	inVoiceChannel: true,
	sameVoiceChannel: true,
	data: new SlashCommandBuilder()
		.setName("autoplay")
		.setDescription("Set autoplay mode on/off."),
	/**
	 * 
	 * @param {ChatInputCommandInteraction} interaction 
	 * @param {client} client 
	 * @returns 
	 */
	async execute(interaction, client) {
		logHandler("client", "2", interaction.user.tag, interaction.commandName);
		await interaction.deferReply();

		const { user } = interaction;
		const embed = new EmbedBuilder();
		const queue = client.distube.getQueue(interaction);

		if (!queue) {
			embed.setDescription("\`📛\` | **No one is playing music right now!**");

			logHandler("error", "0", user.tag, interaction.commandName, "", "no one is playing music at this moment");
			return interaction.followUp({ embeds: [embed], ephemeral: true });
		};

		try {
			const autoplay = await queue.toggleAutoplay();
			embed.setDescription(`\`✅\` | **Success set Autoplay to:** \`${autoplay ? 'On' : 'Off' }\``);

			logHandler("client", "3", user.tag, interaction.commandName);
			return interaction.followUp({ embeds: [embed] });

		} catch (err) {
			console.log(err);

			logHandler("error", "2", user.tag, interaction.commandName, "", err);
			return interaction.followUp({ embeds: [errorEmbed], ephemeral: true });
		};
	}
}
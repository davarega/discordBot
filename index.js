const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');

const { loadCommands } = require('./Handlers/commandHandler');
const { loadEvents } = require('./Handlers/eventHandler');

const client = new Client({
	intents: [Object.keys(GatewayIntentBits)],
	partials: [Object.keys(Partials)]
})

client.commands = new Collection();
client.config = require('./cofig.json');

client.login(client.config.token).then(() => {
	loadCommands(client);
	loadEvents(client);
});
const { SlashCommandBuilder } = require('discord.js');
const comand = {"command":"Ping"}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("ping")
		.setDescription('Responde com Pong!'),
	async execute(interaction) {    
		console.log(`	->Command used: ${JSON.stringify(comand)}`)

		return interaction.reply('Pong!');
	},
    
};

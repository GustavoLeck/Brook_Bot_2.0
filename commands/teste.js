const { SlashCommandBuilder } = require('discord.js');
const comand = {"command":"Teste"}

module.exports = {
	data: new SlashCommandBuilder()
		.setName("teste")
		.setDescription('Comando para testar rotinas'),
	async execute(interaction) {    

		try {	
			console.log(`	->Command used: ${JSON.stringify(comand)}`)
			return interaction.reply(`	->Command used: ${JSON.stringify(comand)}`);
		} catch (error) {
			console.log(`	->Command used: ${JSON.stringify(comand)}`)
			return interaction.reply(`	->Command used: ${JSON.stringify(error)}`);
		}
	

	
	},
    
};

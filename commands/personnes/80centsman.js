const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('80centsman')
    .setDescription("Admirez la simulation d'un message de 80 centimes man"),
  async execute(interaction) {
    const client = interaction.client;
    const ping = client.ws.ping;

    const messagesGwendal = [
      "👏👏 Hey, t'as pas 80 centimes pour un sandwich ?",
      "Allez bonne journée les crevards.",
    ];
    
    // Sélectionner un message aléatoire de l'array
    const randomMessage = messagesGwendal[Math.floor(Math.random() * messagesGwendal.length)];

    // Envoyer le message aléatoire en réponse à l'interaction
    await interaction.reply(randomMessage);
  },
};

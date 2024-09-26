const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('jojo')
    .setDescription("Admirez la simulation d'un message de jojo"),
  async execute(interaction) {
    const client = interaction.client;
    const ping = client.ws.ping;

    const messagesGwendal = [
      "Regarder mes belles fourmis",
      "Vous savez ou c'est la CAF ? Moi oui",
      "J'ai ramener ma tondeuse",
      "Y'a quoi dans la gourde ?",
      "Ca se passe bien la chimio ?",
      "Mes soeurs sont sourdes",
      "+0,5 point pour la cravate",
      "Tant que c'est responsive ca passe",
      "Stéfan 20/20",
      "Chinois, asiatique c'est la même"
    ];
    
    // Sélectionner un message aléatoire de l'array
    const randomMessage = messagesGwendal[Math.floor(Math.random() * messagesGwendal.length)];

    // Envoyer le message aléatoire en réponse à l'interaction
    await interaction.reply(randomMessage);
  },
};

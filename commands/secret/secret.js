const { SlashCommandBuilder } = require("discord.js");

const secretCommand = new SlashCommandBuilder()
  .setName("secret")
  .setDescription("Envoyer un message privé anonyme à un utilisateur.")
  .addUserOption((option) =>
    option
      .setName("utilisateur")
      .setDescription("L'utilisateur à qui vous voulez envoyer un message.")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("message")
      .setDescription("Le message à envoyer.")
      .setRequired(true)
  );

module.exports = {
  data: secretCommand,
  async execute(interaction) {
    const targetUser = interaction.options.getUser("utilisateur");
    const message = interaction.options.getString("message");
    const guild = interaction.guild; // Le serveur où la commande a été exécutée

    // Récupérer le membre du serveur (GuildMember) correspondant à l'utilisateur
    const member = guild.members.cache.get(targetUser.id);

    if (!member) {
      await interaction.reply({
        content: "Utilisateur non trouvé dans ce serveur.",
        ephemeral: true,
      });
      return;
    }

    // Vérifier si l'utilisateur a un rôle spécifique (remplacez l'ID par celui de votre rôle)
    const roleId = "1148545258968322049"; // ID du rôle spécifique
    if (!member.roles.cache.has(roleId)) {
      await interaction.reply({
        content:
          "Cet utilisateur n'a pas le rôle Populasse pour recevoir un message.",
        ephemeral: true,
      });
      return;
    } else {
      try {
        // Envoyer un message privé à l'utilisateur
        await console.log("Message secret :", message);
        await targetUser.send(
          `**Vous avez reçu un message anonyme :**\n> ${message}\n\n*Inutile de répondre, je ne récupère pas les messages ici*`
        );
        await interaction.reply({
          content: "Message envoyé avec succès.",
          ephemeral: true,
        });
      } catch (error) {
        console.error("Erreur lors de l'envoi du message privé :", error);
        await interaction.reply({
          content: "Une erreur est survenue lors de l'envoi du message.",
          ephemeral: true,
        });
      }
    }
  },
};

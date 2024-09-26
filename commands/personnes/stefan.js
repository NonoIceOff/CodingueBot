const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stefan')
    .setDescription("Admirez la simulation d'un message du délégué"),
  async execute(interaction) {
    const client = interaction.client;
    const ping = client.ws.ping;

    const messages = [
      "Teste la branche dev avant de tout merger",
      "On fait quoi si le build casse encore une fois ?",
      "T’as pas vu l’annonce pour la maj ? C’est sorti ce matin",
      "Je te conseille de prendre une pause, trop de code tue le code",
      "Franchement, c’était prévisible depuis le début, mais ça fait mal quand même",
      "Si tu fais ça, prépare-toi à devoir tout recommencer à zéro",
      "Au fait, vous avez testé les nouvelles extensions sur VS Code ?",
      "Je me demande si on doit encore utiliser Docker pour ce projet, ça bug trop",
      "Ça fait deux semaines que je n'ai pas touché au code, je suis rouillé",
      "Hey, t’as vu l’épisode de Jujutsu Kaisen hier soir ?",
      "Les projets s'accumulent, va falloir prioriser",
      "T’as vérifié que t’avais bien les droits d’écriture sur le repo ?",
      "T'as vu le dernier trailer de Zelda ? Énorme, non ?",
      "Le manga Tokyo Revengers devient un peu répétitif, tu trouves pas ?",
      "On devrait vraiment organiser une soirée Mario Kart un de ces quatre",
      "Je t'envoie le lien pour les mods, tu pourras les tester tranquille",
      "Je suis en plein dans One Piece, c'est impossible d'arrêter",
      "Faudrait vraiment qu'on mette en place un CI/CD digne de ce nom",
      "Hésite pas à me ping si t’as besoin d'aide pour configurer le backend",
      "Y’a des bugs étranges sur l’API, je crois que c'est côté serveur",
      "T’as encore regardé Demon Slayer jusqu’à 4h du mat' ?",
      "Bon, je vais essayer de ne pas crasher le serveur cette fois-ci",
      "Faudrait qu’on voit pour configurer les containers ensemble demain",
      "T’es team Pokémon Écarlate ou Violet ?",
      "Je comprends pas pourquoi le script casse juste avant la fin",
      "T’as déjà entendu parler de ce framework web là ? Astro je crois",
      "Les gars, c’est la 5ème fois que je refais cette fonction, je deviens fou",
      "On fait une pause et on se met un épisode d'anime ?",
      "C’est moi ou GitHub a planté encore ?",
      "Je suis en retard sur mes épisodes de My Hero Academia, no spoil stp",
      "T’es chaud pour un p’tit Among Us ce soir ?",
      "Faut qu’on revoit la logique du front, c’est le bazar là",
      "Je capte rien aux shaders, si quelqu’un peut m’expliquer…",
      "J’viens de capter que j’ai codé dans la mauvaise branche tout le week-end",
      "T’es chaud pour un tournoi Smash Bros ce week-end ?",
      "J’ai tellement hâte que Breath of the Wild 2 sorte",
      "Faudrait vraiment patcher cette faille avant que ça devienne critique",
      "Je bosse sur un projet perso en React, tu veux voir ?",
      "T’as déjà testé ce nouvel IDE qui fait fureur là ?",
      "Si Docker continue de planter, je passe tout en local, c’est mort",
      "Y’a une nouvelle fonctionnalité sur GitHub Actions, c’est pratique",
      "Je te conseille d’attendre la prochaine maj pour Fire Emblem, là c’est bancal",
      "T’as vu le dernier film Ghibli ? J’étais en larmes",
      "Si tu veux un bon anime récent, check Oshi no Ko, c’est ouf",
      "Trop de bugs sur cette version, je vais rollback",
      "J’arrête les mangas, j’ai trop de chapitres en retard",
      "Je viens de passer 3h sur un bug, c’était juste une maj npm",
      "Trop de travail en ce moment, j’ai même pas le temps de jouer",
      "On se fait un blindtest d'OST de jeux vidéo ce soir ?",
      "Si tu pouvais coder une app en une nuit, tu ferais quoi ?"
    ];
    
    
    
    
    
    // Sélectionner un message aléatoire de l'array
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Envoyer le message aléatoire en réponse à l'interaction
    await interaction.reply(randomMessage);
  },
};

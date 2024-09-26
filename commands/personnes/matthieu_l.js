const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('matthieu_l')
    .setDescription("Admirez la simulation d'un message de Matthieu Laurent"),
  async execute(interaction) {
    const client = interaction.client;
    const ping = client.ws.ping;

    const messages = [
      "Docker compose up, localhost, et bim ça marche... normalement x)",
      "Je suis pas sûr que ça va passer sans une petite magouille dans le code.",
      "Ah ouais, c'est comme dans Fire Emblem, faut prévoir chaque coup.",
      "T'as test Persona 5 ? Ce jeu est une dinguerie, sérieux !",
      "Les disques rayés, c’est comme tenter un crit sans stats, ça passe ou ça casse mdr.",
      "Attends, t’as jamais vu le final boss de KH2 ?! Faut que tu y joues direct !",
      "Bon... encore un bug de merde, mais c’est la vie d’un dev après tout.",
      "T'as essayé de clear ton cache avant de relancer ?",
      "Si t'as besoin d'aide sur le stage, j'ai une mission freelance, mais c'est galère.",
      "Je capte rien à ce qu'ils veulent sur ce projet... ça change tout le temps.",
      "Des algues roses, on dirait un Pokémon shiny raté mdr.",
      "mdrr on est dans Kingdom Hearts ou quoi, ce truc a trop de rebondissements.",
      "Le cri de Pikachu est dans ma tête à tout jamais xD",
      "Tu crois que c'est plus dur de trouver un bug ou un shiny dans Pokémon ?",
      "Franchement, ils auraient pu faire mieux avec la dernière update de Fire Emblem.",
      "T'as fini Persona 5 Royal ? Le boss final est un vrai casse-tête !",
      "Oh non, encore une boucle infinie, c’est pire qu’un donjon de Kingdom Hearts.",
      "Le corail ressemble plus à un décor de Final Fantasy qu'à des algues x)",
      "Docker c’est bien, mais si tu rates un paramètre, c’est la fin du monde.",
      "T’as remarqué comme la musique de Persona te reste en tête ?",
      "Si on se fait un blindtest Pokémon, je te détruis tous les jours xD",
      "Il faut vraiment que je prenne le temps de finir Fire Emblem Three Houses.",
      "On fait un grec mardi si tu veux, mais j'sais pas si j'aurai les thunes.",
      "Quand tu lances docker et que tout marche du premier coup... rare mais magique.",
      "La dernière saison de My Hero Academia est dingue, t’as vu ?",
      "Faudrait qu'on se fasse une session de Wii Sports un de ces jours.",
      "Je préfère largement le combat au tour par tour à l’action temps réel, perso.",
      "T’as vu le dernier épisode de One Piece ? Incroyable !",
      "Le prochain Nintendo Direct va être fou, je le sens.",
      "Persona 4 Golden est vraiment sous-coté, t'as essayé ?",
      "Encore un bug, mais au moins ça m’empêche pas de jouer à Kingdom Hearts.",
      "Le stage que je fais, c'est un peu comme un donjon répétitif, mais moins fun xD",
      "La dernière màj de Pokémon m'a bien surpris, ils ont enfin écouté la communauté.",
      "Je savais que Docker était puissant, mais là je suis perdu dans la doc mdr.",
      "Faut vraiment qu'on se fasse une soirée Persona, tu verras c'est addictif.",
      "J'ai galéré à battre ce boss, mais après 3 tentatives, j'ai réussi comme un pro.",
      "Ah, encore un bug dans mon code, jpp...",
      "Le truc c'est que Persona 5, c'est plus qu'un jeu, c'est une expérience.",
      "J'vais encore passer la nuit à debug mon code, wish me luck !",
      "J’suis toujours choqué par la fin de KH3... ils ont tout retourné.",
      "Si je rate ce freelance, c'est un peu comme rater un shiny après 500 resets.",
      "J'ai testé le code, ça marche bien, mais c’est pas très clean.",
      "J'te jure, entre Docker et Fire Emblem, mon cerveau va exploser.",
      "Le prochain Smash Bros, ça va être de la folie, tu vas voir !",
      "Faut vraiment que je mette à jour mes drivers avant de lancer ça...",
      "Les disques rayés c’est comme coder sans git, tu vis dangereusement x)",
      "J'attends de voir ce que Persona 6 va donner, mais j'ai bon espoir.",
      "Si tu veux crack les jeux, j'peux t'aider, mais c’est risqué mdr.",
      "J'espère que la Switch 2 sera rétrocompatible, sinon c’est la loose.",
      "La musique de Persona me motive toujours à coder, c'est ouf.",
    ];
    
    
    
    // Sélectionner un message aléatoire de l'array
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    // Envoyer le message aléatoire en réponse à l'interaction
    await interaction.reply(randomMessage);
  },
};

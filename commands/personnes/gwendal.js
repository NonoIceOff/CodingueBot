const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gwendal')
    .setDescription("Admirez la simulation d'un message de Gwendal"),
  async execute(interaction) {
    const client = interaction.client;
    const ping = client.ws.ping;

    const messagesGwendal = [
      "jpp c'était censé être bien mais ça a flop direct x)",
      "ouais bah de toute façon ils foutent tjs la merde pour rien",
      "mdrrr ça sert à rien d'y croire, ils vont encore tout gâcher",
      "ah lesgo, mais bon j'suis pas convaincu",
      "j'ai zappé, aucun intérêt franchement",
      "l'année dernière c'était déjà chiant, alors là c'est mort",
      "tu vois, c'est exactement ce que j'avais prédit mdr",
      "pff trop de dramas pour des trucs inutiles",
      "ah ouais non mais ils ont vraiment rien appris de leurs erreurs",
      "cheh sale merde, c'est mérité mdrrr",
      "perso j'en ai marre de ces bails qui tournent en rond",
      "mdr, j'attendais rien et je suis quand même déçu",
      "franchement si ça continue comme ça, c'est sans moi l'année prochaine",
      "oe, toujours le même délire, ça devient relou",
      "c'est bon, j'ai même plus envie de suivre cette histoire",
      "j'te jure c'est de pire en pire chaque année",
      "ça pue tellement l'embrouille, osef",
      "nn mais clairement, ils savent pas gérer leurs caprices",
      "je sens que ça va encore être une galère sans nom",
      "faut arrêter de croire à ce genre de trucs, c'est mort",
      "c'était drôle 5 min, mais là ça tourne en boucle",
      "chaque fois c'est la même histoire, c'est chiant",
      "franchement, j'ai plus la force de suivre ce cirque",
      "je savais que ça allait finir comme ça, aucun suspens",
      "ça me fatigue tellement ces embrouilles",
      "bah écoute, ça m'étonne même plus à ce stade",
      "quand c'est pas l'un, c'est l'autre, une vraie telenovela",
      "encore un drama pour rien, c'est lassant",
      "je t'avais dit que ça servait à rien d'espérer",
      "nan mais franchement, qui a encore envie de regarder ça ?",
      "chaque année c'est pire, et pourtant j'y crois toujours un peu mdr",
      "bon bah voilà, encore un beau flop en perspective",
      "c'est devenu un vrai sketch cette histoire",
      "je me disais bien que ça allait finir en eau de boudin",
      "on dirait qu'ils aiment ça, foutre la merde entre eux",
      "j'avoue, ça m'a fait rire, mais quand même abusé",
      "mdr ils ont encore réussi à tout gâcher",
      "je pensais pas qu'ils pouvaient faire pire, mais si",
      "je t'avais dit que c'était mort, tu m'as pas cru",
      "nan mais les dramas comme ça, c'est leur spécialité",
      "ça devient n'importe quoi, j'en peux plus",
      "ouais bah ils peuvent s'en prendre qu'à eux-mêmes",
      "ils veulent trop en faire, du coup ça flop à chaque fois",
      "même moi j'aurais fait mieux en organisant ça",
      "bah voilà, encore une embrouille sortie de nulle part",
      "t'inquiète, c'est toujours la même histoire avec eux",
      "franchement, on aurait dû s'y attendre mdr",
      "ils sont dans leur propre monde, c'est ouf",
      "j'attendais rien et je suis quand même déçu, classique",
      "mdrr ils savent vraiment pas se gérer"
    ];
    
    // Sélectionner un message aléatoire de l'array
    const randomMessage = messagesGwendal[Math.floor(Math.random() * messagesGwendal.length)];

    // Envoyer le message aléatoire en réponse à l'interaction
    await interaction.reply(randomMessage);
  },
};

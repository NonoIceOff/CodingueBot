const {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  ActivityType,
  Events,
  ButtonBuilder,
  ActionRowBuilder,
  ButtonStyle,
  PollLayoutType,
  PollAnswer,
  WebhookClient,
} = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, guildId, clientId, test } = require("./config");
const { EmbedBuilder } = require("discord.js");
const Parser = require("rss-parser");
const parser = new Parser();
const webhookClient = new WebhookClient({
  url: "https://discord.com/api/webhooks/1268279903464456233/3_1h9RXXPiEwpL5CfCzOtQPaP1aprra-O3abTvT9YmHv40N_GL34vpjZ3IFS0jTSd7zt",
});


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});


client.commands = new Map();

const commandFolders = readdirSync(join(__dirname, "commands"));

for (const folder of commandFolders) {
  const commandsPath = join(__dirname, "commands", folder);
  const commandFiles = readdirSync(commandsPath).filter((file) =>
    file.endsWith(".js")
  );

  for (const file of commandFiles) {
    const filePath = join(commandsPath, file);
    const command = require(filePath);

    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
      );
    }
  }
}

const commands = Array.from(client.commands.values(), (cmd) =>
  cmd.data.toJSON()
);

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`
    );

    const data = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands }
    );

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`
    );
  } catch (error) {
    console.error(error);
  }
})();

client.on("ready", async () => {
  console.log(`Logged in as $ {client.user.tag}!`);
  let statusText = "Meilleur bot du monde - V2";
  if (test == true) {
    statusText = "En développement...";
  }
  client.user.setPresence({
    activities: [{ name: `${statusText}`, type: ActivityType.Custom }],
    status: "Hello world",
  });
});

const interactionMap = new Map();
client.on("interactionCreate", async (interaction) => {
  if (interaction.customId === "welcome_button") {
    if (!interactionMap.has(interaction.user.id)) {
      interactionMap.set(interaction.user.id, true);

      await webhookClient
        .send({
          content: `:wave:  *Bienvenue ! (de la part de ${interaction.user.globalName})*`,
          username: interaction.user.globalName,
          avatarURL: interaction.user.avatarURL(),
        })
        .then((webhook) => console.log(interaction.user))
        .catch(console.error);
      await interaction.reply({
        content: "Message de bienvenue bien envoyé !",
        ephemeral: true,
      });
    } else {
      await interaction.reply({
        content: "Vous avez déjà souhaité la bienvenue à cette personne.",
        ephemeral: true,
      });
    }
  }

  if (interaction.customId === "broadcastModal") {
    const broadcastMessage =
      interaction.fields.getTextInputValue("broadcastMessage");
    interaction.guild.members.cache.forEach((member) => {
      if (!member.user.bot || member.roles.cache.has("1148545258968322049")) {
        member.send(`${broadcastMessage}`).catch(console.error);
      }
    });

    await interaction.reply({ content: "Message envoyé à tous ceux qui ont le role Populasse !" });
  }
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`);
    return;
  }

  try {
    if (
      interaction.channel.id != "1169668664493084822"
    ) {
      await interaction.reply({
        content:
          "Vous ne devez utiliser les commandes que sur <#1169668664493084822>",
        ephemeral: true, // Make this reply ephemeral so that it doesn't clutter the channel
      });
    } else if (test == true) {
      if (!interaction.member.permissions.has("ADMINISTRATOR")) {
        await interaction.reply({
          content: "Le bot est en maintenance",
          ephemeral: true,
        });
      } else {
        await command.execute(interaction, client);
      }
    } else {
      await command.execute(interaction, client);
    }
  } catch (error) {
    console.error(error);

    // Check if the interaction has already been replied to avoid the InteractionAlreadyReplied error
    if (!interaction.replied) {
      await interaction.reply({
        content: "There was an error while executing this command!",
        ephemeral: true,
      });
    }
  }
});


client.login(TOKEN);

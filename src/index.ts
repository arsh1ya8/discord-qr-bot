import { Client, GatewayIntentBits, Message } from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}`);
});

client.on('messageCreate', async (message: Message) => {
  if (message.author.bot) return;

  if (message.content.startsWith('!qr ')) {
    const text = message.content.slice(4).trim();

    if (!text) {
      message.reply('Please provide text! Usage: `!qr <your text>`');
      return;
    }

    const qrUrl =  `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
    await message.reply({
      content: `Here's your QR code for: **${text}**`,
      files: [{ attachment: qrUrl, name: 'qrcode.png' }],
    });
  }
});

client.login(process.env.DISCORD_TOKEN);
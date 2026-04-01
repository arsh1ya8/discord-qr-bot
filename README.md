# Discord QR Code Bot 🤖

A Discord bot that generates QR codes from any text or URL using a simple command.

## Demo
Type `!qr <text or URL>` in Discord and the bot replies with a QR code image!

## Features
- Generate QR codes from any URL or text
- Works instantly in any Discord server channel

## Commands
| Command | Description | Example |
|---------|-------------|---------|
| `!qr <text>` | Generates a QR code | `!qr https://google.com` |

## Tech Stack
- Node.js
- TypeScript
- Discord.js
- [qrserver.com API](https://goqr.me/api/)

## Setup & Installation

1. Clone the repo
   git clone https://github.com/arsh1ya8/discord-qr-bot.git

2. Install dependencies
   npm install

3. Create a `.env` file and add your Discord bot token
   DISCORD_TOKEN=your_token_here

4. Run the bot
   npm start

## How to get a Discord Bot Token
1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a New Application
3. Go to Bot tab → Reset Token → copy it
4. Enable Message Content Intent

## License
MIT
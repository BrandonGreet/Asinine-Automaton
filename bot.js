// Dependencies
const Discord = require("discord.io");
const auth = require("./auth.json");

// Initialize Discord bot
const bot = new Discord.Client({
	token: auth.discord,
	autorun: true
});

// Connect and confirm connection
bot.on("ready", () => {
	console.log("Connected");
	console.log(`Logged in as ${bot.username}, ID: ${bot.id}`);
});

// Respond to message in server
bot.on("message", (user, userID, channelID, message) => {



	// Respond to certain phrases in regular conversation



	// Process and respond to bot commands
	if (message.substring(0,1) == "!") {
		let args = message.substring(1).split(' ');

		switch (args[0]) {

			// Say hello to a user
			case "hi":
			case "hello":
			case "hey":
				bot.sendMessage({
					to: channelID,
					message: `Hello <@${userID}>!`
				});
				break;

			// Give information to user
			case "info":
			case "information":
				bot.sendMessage({
					to: channelID,
					message: `I'm ${bot.username}, an implementation of Brandon Greet's Discord Bot.\nYou can find my GitHub Repository here: https://github.com/BrandonGreet/Discord-Bot`
				});
				break;

			// Give a ticket to a user
			// Format: !ticket {user} {reason}
			case "ticket":
				break;

			// Translate a given message into Ogham
			case "ogham":
				break;
		}
	}



});
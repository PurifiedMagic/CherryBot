const Discord = require("discord.js-commando");

module.exports = class rollCommand extends Discord.Command {
  constructor(client) {
    super(client,{
      name: "roll",
      group: "basic",
      memberName: "roll",
      description: "roll dice"
    });
  }

  async run(message) {
    let chance = (Math.floor(Math.random() * 6) + 1);
    message.channel.send("Your dice rolls: " + chance);
  }
}

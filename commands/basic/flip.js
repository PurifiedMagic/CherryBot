const Discord = require("discord.js-commando");

module.exports = class flipCommand extends Discord.Command {
  constructor(client) {
    super(client,{
      name: "flip",
      group: "basic",
      memberName: "flip",
      description: "flip coin"
    });
  }
  async run(message) {
    let chance = Math.floor(Math.random() * 2)
    if(chance == 0) {
      message.channel.send("heads");
    }
    else {
      message.channel.send("tails");
    }
  }
}

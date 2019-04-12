const Discord = require("discord.js-commando");
const config = require("./config.json");
//const mocha = require("./node_modules/mocha/bin/mocha");
const path = require("path");

global.cherry = new Discord.CommandoClient({
    commandPrefix: "Cherry, ",
    unknownCommandResponse: false,
    owner: "OWNER_ID_HERE"
});

//Path to 'includes' directory
require("fs").readdirSync("./includes").forEach(function (file) {
    require("./includes" + "/" + file);
});

//Setup paths to bot files
cherry.registry.registerGroup("basic", "Basic");
cherry.registry.registerDefaults();
cherry.registry.registerCommandsIn(path.join(process.cwd(), "commands"));

//Cherry bot turning on
cherry.on("ready", function(){
  console.log("ready")
})
cherry.login(config.token);

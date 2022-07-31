const Minefield = require('discord.js-minesweeper');

module.exports.run = async (client, message, args) => {
  const minesweeper = new Minefield();
  minesweeper.start();
}
module.exports.name = "minefield";
module.exports.description = "Starts a 9x9 minefield game. Classic!";
module.exports.category = "fun";
module.exports.usage = "+minefield";
module.exports.aliases = ["mf", "minesweeper", "ms"];

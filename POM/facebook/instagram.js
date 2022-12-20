const Commands = require('../Commands');

class instagram {
    commands = new Commands();

clickInstagramLocator = '=Instagram'

async clickInstagram() {
  await this.commands.clickWebElement(this.clickInstagramLocator);

}

} 
module.exports = instagram
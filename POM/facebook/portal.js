const Commands = require('../Commands');

class portal {
    commands = new Commands();
clickPortalLocator = '=Portal'

async clickPortal(){
await this.commands.clickWebElement(this.clickPortalLocator);
}

}

module.exports = portal

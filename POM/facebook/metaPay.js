const Commands = require('../Commands');

class metaPay {
    commands = new Commands();
    metaPaySiteLocator = '=Meta Pay'
    isMetaPayDisplayedLocated = '=Using Meta Pay'
    mouseOverMetaLocator = '=Using Meta Pay'
    metaCheckoutDisplayedLocator = '=Online Checkout'


async metaCheckoutDisplayed() {
  return await $(this.metaCheckoutDisplayedLocator).isDisplayed()
} 



async mouseOverMeta() {
  await $(this.mouseOverMetaLocator).moveTo();
}


async isMetaPayDisplayed() {
    return await $(this.isMetaPayDisplayedLocated).isDisplayed()
}


async metaPaySite(){
  await this.commands.clickWebElement(this.metaPaySiteLocator);

}

}

module.exports = metaPay
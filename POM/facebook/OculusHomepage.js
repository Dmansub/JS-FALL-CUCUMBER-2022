const Commands = require('../commands');

class OculusHomepage {

   commands = new Commands()

   clickOculusLocator = '=Oculus';
   isSupportDisplayedLocator =  '//span[text()="Support"]'
   getWindow

   async isSupportDisplayed(){
      return await $(this.isSupportDisplayedLocator).isDisplayed()
   }


async clickOculus() {
     await this.commands.clickWebElement(this.clickOculusLocator);
}


}
module.exports = OculusHomepage;
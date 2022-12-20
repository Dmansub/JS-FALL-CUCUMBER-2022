const Commands = require("../Commands")

class HotelsPage {

    commands = new Commands();
   
   
    languageOptionLocator = '=English' ;
    clickEspanolLocator = '=Español'
    clickSaveLocator = ''

    async languageOption() {
       
       await this.commands.clickWebElement(this.languageOptionLocator);
    }

    async clickEspanolLocator() {
       
        await this.commands.clickWebElement(this.clickEspanolLocator);
     }
 
    async clickSaveLocator()



}
module.exports = HotelsPage;
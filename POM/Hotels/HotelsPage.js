const Commands = require("../Commands")

class HotelsPage {

    commands = new Commands();
   
      
    clickOnDatesLocator = '#date_form_field-btn'
    clickOnSignInLocator = '#gc-custom-header-nav-bar-acct-menu'
    clickOnFeedbackLocator = '*=ck'
    clickSubmitLocator = '#submit-button'
    scrollToAppLocator = '//button[text()="Get the app"]'
    clickOnTravelersLocator = '//button[contains(@class, "uitk-menu-trigger uitk-fake-input uitk-form-field-trigger")]'
    clickEnglishLocator = '/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[4]/header[1]/nav[1]/div[1]/button[1]'
    enterNumberLocator = '#phoneNumber'
     clickGetTheAppLocator = '//button[text()="Get the app"]'
     isPhoneErrorDisplayedLocator = '#phoneNumber-error'
     isErrorFillDisplayedLocator = '#required'
     redDottedBoxLocator = '#required_box_page_rating'
     selectRatingLocator = '/html[1]/body[1]/div[3]/div[2]/fieldset[1]/div[1]/div[2]/label[1]'
     enterCommentsLocator = '#verbatim'
     everBookedLocator = '/html[1]/body[1]/div[3]/div[2]/fieldset[2]/div[1]/div[1]/label[1]'
     whatAccomplishLocator = '/html[1]/body[1]/div[3]/div[2]/fieldset[3]/div[1]/div[2]/label[1]'
     selectOnSubmitButtonLocator = '#submit-button'
     feedbackMessageLocator = '#thank-you'
     
     adultAddButtonLocator = '//*[@aria-label="Increase the number of adults in room 1"]'
     childrenButtonLocator = '//*[@aria-label="Increase the number of children in room 1"]'
     
     languageLocator = '//button[@data-stid]//div[contains(@class, "uitk-text-default-theme")]'
      languageDropDownLocator = '#language-selector'
      saveButtonLocator = '//button[text()="Save" or text()="Guardar"]'

      leftSideCalendarHeaderLocator = '(//div[@class="uitk-date-picker-month"])[1]//h2';
      pastDisabledDatesLocator = '//button[contains(@aria-label, "disabled")]'
      prevCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[1]';

//    tc18
childButtonLocator = '#age-traveler_selector_children_age_selector-0-0'
childAge4Locator ='/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/section[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/section[1]/div[2]/div[2]/div[1]/div[1]/select[1]/option[5]'

async childButton() {
    await this.commands.clickWebElement(this.childButtonLocator);
       await browser.pause(2000) 
     
}

async childAge4(number) {
    await this.commands.selectDataInDropdown(this.childAge4Locator,'value', 4);
    await browser.pause(2000)
}
   

    
      async childrenButton(select) {
        await this.commands.clickMultipleTimes(this.childrenButtonLocator, select);
        await browser.pause(1000)    
    }


      async adultAddButton(select) {
        await this.commands.clickMultipleTimes(this.adultAddButtonLocator , select);
        await browser.pause(1000)    
    }

//////////////////////////////////////////////////

      async changeLanguage(newLanguage) {
        await this.commands.clickWebElement(this.languageLocator)
        await this.commands.selectDataInDropdown(this.languageDropDownLocator, newLanguage)
        await this.commands.clickWebElement(this.saveButtonLocator)
    }
   
   
    async getLanguageFromWeb() {
        return await this.commands.getTextOfWebElement(this.languageLocator)
    }

     
    

     
     async feedbackMessage() {
        await this.commands.isDisplayed(this.feedbackMessageLocator);
        await browser.pause(1000)    
    }   

      
     async selectOnSubmitButton() {
        await this.commands.clickWebElement(this.selectOnSubmitButtonLocator);
        await browser.pause(2000)    
    }


     async whatAccomplish() {
        await this.commands.clickWebElement(this.whatAccomplishLocator);
        await browser.pause(1000)    
    }
    
    
     async everBooked() {
        await this.commands.clickWebElement(this.everBookedLocator);
        await browser.pause(2000)    
    }

   
async OptionReturn(){
    const selectOptionReturn = await $('#will-you-return')
     selectOptionReturn.click()
     await browser.pause(2000) 

    }
   async highUnlike(){
    const selectHighUnlike = await $('/html[1]/body[1]/div[3]/div[2]/select[1]/option[6]')
    selectHighUnlike.click()
   }

   
     async enterComments() {
        await this.commands.typeInWebElement(this.enterCommentsLocator , 'do not like this crappy hotel');
        await browser.pause(2000)   
    }


     async selectRating() {
        await this.commands.clickWebElement(this.selectRatingLocator);
        await browser.pause(2000)    
    }


     async redDottedBox() {
        await this.commands.isDisplayed(this.redDottedBoxLocator);
        await browser.pause(2000)    
    }   


     async isErrorFillDisplayed() {
        await this.commands.isDisplayed(this.isErrorFillDisplayedLocator);
        await browser.pause(2000)    
    }   
     
     async isPhoneErrorDisplayed() {
        await this.commands.isDisplayed(this.isPhoneErrorDisplayedLocator);
        await browser.pause(2000)    
    }  



     async clickGetTheApp() {
        await this.commands.clickWebElement(this.clickGetTheAppLocator);
        await browser.pause(2000)    
    }


    async enterNumber() {
        await this.commands.typeInWebElement(this.enterNumberLocator ,11111);
        await browser.pause(2000)   
    }





async switchPage(){
    const hotelWindowHandle = await this.commands.getHandle()
    const allWindowHandles = await this.commands.getHandles()
    for(const handle of allWindowHandles){
        if(handle!== hotelWindowHandle){
            await this.commands.switchToWindowHandle(handle)
        }
    }
}


 
    async clickEnglish() {
        await this.commands.clickWebElement(this.clickEnglishLocator);
        await browser.pause(2000)    
    }

    async clickOnTravelers() {
        await this.commands.clickWebElement(this.clickOnTravelersLocator);
        await browser.pause(2000)    
    }

    
    async scrollToApp() {
        await this.commands.scrollIntoView(this.scrollToAppLocator);
        await browser.pause(2000)    
    } 
    
    async clickSubmit() {
        await this.commands.clickWebElement(this.clickSubmitLocator);
        await browser.pause(2000)    
    }
   
   
    async clickOnFeedback() {
        await this.commands.clickWebElement(this.clickOnFeedbackLocator);
        await browser.pause(4000)    
    }
    
    
    async clickOnSignIn() {
        await this.commands.clickWebElement(this.clickOnSignInLocator);
        await browser.pause(2000)    
    }
   
    async clickOnDates() {
        await this.commands.clickWebElement(this.clickOnDatesLocator);
        await browser.pause(2000)    
    }

        
   
}
module.exports = HotelsPage;
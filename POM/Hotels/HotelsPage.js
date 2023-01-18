const { expect } = require("chai");
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
      
//HOTELS CALENDAR

    // Locators for web-Elements on the HomePage (variables)
    // Destination
    goingToLocator = '//button[@aria-label="Going to"]';
    goingToTypeLocator = '#destination_form_field';
    autoSuggestionsLocator = '//div[@class="truncate"]//strong';

// Calendar
calendarOpenLocator = '#date_form_field-btn';
    
allDatesLocator_starts = '//button[starts-with(@aria-label, "'
allDatesLocator_ends = '")]'

calendarDoneButtonLocator = '//button[text()="Done" and @data-stid]';
nextCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[2]';
prevCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[1]';
leftSideCalendarHeaderLocator = '(//div[@class="uitk-date-picker-month"])[1]//h2';


  // functions to interact with the web-Elements on the HomePage
  async enterDestination(destination) {
    await this.commands.clickWebElement(this.goingToLocator);
    await this.commands.typeInWebElement(this.goingToTypeLocator, destination);
}

async selectFromSuggestedDestinations(userChoice) {
    await this.commands.selectFromAutoSuggestion(this.autoSuggestionsLocator, userChoice);
}

async openCalendar() {
    await this.commands.clickWebElement(this.calendarOpenLocator);
}

async selectCheckInDate(date) {
   // date = "February 10 2023"
   // 'February', '10', '2023'
    const dateArray = date.split(' ');
    await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
    const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
   await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
}

async selectCheckOutDate(date) {
    const dateArray = date.split(' ');
    await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
    const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
    await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
}

async clickDoneOnCalendar() {
    await this.commands.clickWebElement(this.calendarDoneButtonLocator);
}

async clickToGoToNextCalendar() {
    await this.commands.clickWebElement(this.nextCalendarButtonLocator);
}

async clickToGoToPrevCalendar() {
    await this.commands.clickWebElement(this.prevCalendarButtonLocator);
}

// 'May 2023'
async goToMonth(monthYear) {
    /**
     * using leftSideCalendarHeaderLocator get headerElement
     * find text of webElement
     * if (text NOT equal to monthYear) 
     *      click >
     */
    let count = 1;
    while(count<=12) {
        const monthHeader = await this.commands.getTextOfWebElement(this.leftSideCalendarHeaderLocator);
        console.log(`\n monthHeader -> ${monthHeader} \n`);
        if (monthHeader.localeCompare(monthYear) === 0) {
            break;
        }
        await this.commands.clickWebElement(this.nextCalendarButtonLocator);
        await browser.pause(1000);
        count++;
    }
}







      //TC23
      textSearchLocator = '#destination_form_field'
      async textSearch(search) {
        await this.commands.typeInWebElement(this.textSearchLocator ,search);
        await browser.pause(2000) 
    }

    searchBarLocator = "//*[@class='uitk-field has-floatedLabel-label has-icon']"
    async searchBar(search) {
      await this.commands.clickWebElement(this.searchBarLocator ,search);
      await browser.pause(2000) 
    }

    clickManLocator = "//*[@class='is-subText truncate']"
    async clickMan() {
      await this.commands.clickWebElement(this.clickManLocator );
      await browser.pause(2000) 
    }
      
    selectSearchBtnLocator = '#search_button'
    async selectSearchBtn() {
        await this.commands.clickWebElement(this.selectSearchBtnLocator );
        await browser.pause(1000) 
      }

      click5StarLocator = '//label[@aria-label="5 star"]'
      async click5Star() {
          await this.commands.clickWebElement(this.click5StarLocator);
          await browser.pause(4000) 
        }
  
   selectPriceLocator = '#sort-filter-dropdown-sort'
   
   async selectPrice() {
       await this.commands.clickWebElement(this.selectPriceLocator);
       await browser.pause(1000) 
     }
    
     selectPriceDLocator = ("Price")
         async selectPriceD() {
       await this.commands.selectByVisibleText(this.selectPriceDLocator);
       await browser.pause(2000) 
     }
 
    

//TC33


//TC22 
createEmailAddresLocator = '#signupFormEmailInput'
async createEmailAddres (email) {
    await this.commands.typeInWebElement(this.createEmailAddresLocator, email);
    await browser.pause(2000) 
}

verifyEmailErrLocator = '#signupFormEmailInput-error'
async verifyEmailErr() {
    await this.commands.isDisplayed(this.verifyEmailErrLocator);
    
}

invalidFirstNameLocator = '#signupFormFirstNameInput'
async invalidFirstName(first) {
    await this.commands.typeInWebElement(this.invalidFirstNameLocator ,first);
    await browser.pause(2000) 
}

verifyFirstNameErrorLocator = '#signupFormFirstNameInput-error'
async verifyFirstNameError() {
    await this.commands.isDisplayed(this.verifyFirstNameErrorLocator);
    
}

enterInvalidLastNameLocator = '#signupFormLastNameInput'
async enterInvalidLastName(last) {
    await this.commands.typeInWebElement(this.enterInvalidLastNameLocator ,last);
    await browser.pause(2000) 
}

verifyLastNameErrorLocator = '#signupFormLastNameInput-error'
async verifyLastNameError() {
    await this.commands.isDisplayed(this.verifyLastNameErrorLocator);
    
}

enterAPasswordLocator = '#signupFormPasswordInput'
async enterAPassword() {
    await this.commands.typeInWebElement(this.enterAPasswordLocator ,'53h23');
    await browser.pause(2000) 
}

isCheckBoxDisplayedLocator = '#rememberMeSignUpCheckbox'
async isCheckBoxDisplayed() {
    await this.commands.isDisplayed(this.isCheckBoxDisplayedLocator);
    await browser.pause(2000) 
}


isCheckBoxEnabledLocator = '#rememberMeSignUpCheckbox'
async isCheckBoxEnabled() {
    await this.commands.isWebElementEnabled(this.isCheckBoxEnabledLocator);
    await browser.pause(2000) 
}

continueBtnLocator = 'jy'
async continueBtn() {
    await this.commands.isWebElementEnabled(this.continueBtnLocator);
    await browser.pause(2000) 

}

//tc28
verifyChildAre2Locator = '//select[contains(@id, "children_age_selector")]'
async verifyChildAre2(kid) {
return await this.commands.isDisplayed(this.verifyChildAre2Locator , kid)
 }

verifyPlusBtnLocator = '#traveler_selector_children_step_input-0-increase-title'
async verifyPlusBtn(enabled) {
    await this.commands.isWebElementEnabled(this.verifyPlusBtnLocator );
    await browser.pause(2000) 
}

verifyMinusBtnLocator =  '//*[@aria-label="Increase the number of children in room 1"]'
async verifyMinusBtn(enabled) {
    await this.commands.isWebElementEnabled(this.verifyMinusBtnLocator );
    await browser.pause(2000) 
}




      //tc21 
enterIvEmailLocator = '#signupFormEmailInput'

async enterIvEmail(email) {
    await this.commands.typeInWebElement(this.enterIvEmailLocator , email);
    await browser.pause(2000) 
}

enterIvPasswordLocator = '#loginFormPasswordInput'

async enterIvPassword() {
    await this.commands.typeInWebElement(this.enterIvPasswordLocator ,'hgshed');
    await browser.pause(2000) 
}

signInBtnLocator =  '#loginFormSubmitButton'

async signInBtn() {
    await this.commands.clickWebElement(this.signInBtnLocator);
 }

clickSignInButtonLocator = '*=Sign'
async clickSignInButton() {
    await this.commands.clickWebElement(this.clickSignInButtonLocator);
 }

 isErrorMesShowLocator =  "//*[@class='uitk-error-summary']"
  async isErrorMesShow() {
   return await this.commands.isDisplayed(this.isErrorMesShowLocator);
   
}


 ///tc20
     signUpLinkLocator = '*=free'
 async signUpLink() {
    await this.commands.clickWebElement(this.signUpLinkLocator);
 }
clickTermConLocator = '*=Conditio'
async clickTermCon() {
    await this.commands.clickWebElement(this.clickTermConLocator);
 }
checkTermConLocator = '*=PDF'
async checkTermCon() {
    await this.commands.isDisplayed(this.checkTermConLocator)
    console.log(`\n\n checkTermCon -> ${this.checkTermCon} \n\n`);
}

//    tc18
childButtonLocator = '#age-traveler_selector_children_age_selector-0-0'
childAge4Locator = '//*[@aria-label="Children Ages 0 to 17"]'




async childButton() {
    await this.commands.clickWebElement(this.childButtonLocator);
       await browser.pause(2000) 
     
}

async childAge4() {
    await this.commands.selectDataInDropdown(this.childAge4Locator , 4) ;
    await browser.pause(1000)
    
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
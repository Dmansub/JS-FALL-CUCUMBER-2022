const { Given, When, Then , } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const { And, and } = require("wdio-wait-for");
const HotelsPage = require("../../POM/Hotels/HotelsPage");
const Dates = require("../../utils/Dates");
const hotelsPage = new HotelsPage();

const dates = new Dates();

Given(/^I am on (facebook|hotels|yahoo|amazon)$/, async function (urlName) {
    switch (urlName.toLowerCase()) {
        case 'facebook':
            await browser.url('/');
            break;
        case 'hotels':
            await browser.url('https://www.hotels.com');
            break;
            case 'yahoo':
            await browser.url('https://www.yahoo.com');
            break;
        case 'amazon':
            await browser.url('https://www.amazon.com');
            break;
        default:
            break;
    }
});

//TC23 
When(/^search '(.*)' in bar$/, async function (search) {
    await browser.maximizeWindow()
    await hotelsPage.searchBar(search)
    await browser.pause(2000)
    await hotelsPage.textSearch(search);
await browser.pause(2000)
await hotelsPage.clickMan()
await browser.pause(2000)
});

When(/^Enter Check-in date as Feb-10-2023$/, async function () {
    
    await hotelsPage.openCalendar()
       await browser.pause(1000)
await hotelsPage.selectCheckInDate('February 10 2023')
await browser.pause(1000)

    });

    When(/^Enter Check-out date as Feb-16-2023$/, async function () {
             
    await hotelsPage.selectCheckOutDate('February 16 2023')
    await browser.pause(1000)
    await hotelsPage.clickDoneOnCalendar()
    await browser.pause(2000)

        });
    
        When(/^click on search button$/, async function () {
            await hotelsPage.selectSearchBtn()
            await browser.pause(1000)
                  });    

         When(/click 5 star rating$/, async function () {
                 await hotelsPage.click5Star()
                 await browser.pause(5000)
                  });


                  When(/select price from dropdown$/, async function () {
                    await hotelsPage.selectPrice()
                    await browser.pause(2000)
                    await hotelsPage.selectPriceD()
                    await browser.pause(1200)
                     });




//TC33
When(/^I enter '(.*)' as email$/, async function (email) {
    await hotelsPage.createEmailAddres(email);
await browser.pause(1000)
});

When(/^I enter '(.*)' in First name$/, async function (first) {
    await hotelsPage.invalidFirstName(first);
   await browser.pause(3000)
});

When(/^I enter '(.*)' in Last name$/ , async function (last) {
    await hotelsPage.enterInvalidLastName(last);
   await browser.pause(1000)
});

//tc22
Then(/^click on sign up$/ , async function () {
    await hotelsPage.signUpLink();
   await browser.pause(1000)

});

Then(/^I type '(.*)' email$/ , async function (email) {
    await hotelsPage.enterIvEmail(email);
   await browser.pause(3000)
  
});

Then(/^verify email error$/ , async function () {
    await hotelsPage.verifyEmailErr();
   await browser.pause(1000)
  
});

Then(/^type invalid first name$/ , async function () {
    await hotelsPage.invalidFirstName();
   await browser.pause(3000)
  
});

Then(/^verify first name error$/ , async function () {
    await hotelsPage.verifyFirstNameError();
   await browser.pause(1000)
  
});

Then(/^enter invalid last name$/ , async function () {
    await hotelsPage.enterInvalidLastName();
   await browser.pause(1000)
  
});

Then(/^verify error for last name$/ , async function () {
    await hotelsPage.verifyLastNameError();
   await browser.pause(1000)
  
});

Then(/^enter account password$/ , async function () {
    await hotelsPage.enterAPassword();
   await browser.pause(1000)
  
});
Then(/^verify checkbox is displayed and enabled$/ , async function () {
   await hotelsPage.isCheckBoxDisplayed()
   await browser.pause(1000)
   await hotelsPage.isCheckBoxEnabled()
   await browser.pause(1000)
});




//tc28
Then(/^click on children as '(.*)'$/, async function (select) {
    await hotelsPage.childrenButton(select);
   await browser.pause(1000)
});


Then(/^verify children age are '(.*)'$/ , async function (kid) {
        const errMsg = await hotelsPage.verifyChildAre2()
        expect(errMsg ,'verify child age')
        await browser.pause(1000)
});

Then(/^verify Plus-button is enabled$/ , async function () {
    const check = await hotelsPage.verifyPlusBtn()
    expect(check ,'enabled')
    await browser.pause(1000)
});

Then(/^verify Minus-button is enabled$/ , async function () {
    const check = await hotelsPage.verifyMinusBtn()
    expect(check ,'enabled')
    await browser.pause(1000)
});


//tc21  
//Then(/^enter invalid email$/ , async function () {
  //  await hotelsPage.enterIvEmail();
   //await browser.pause(1000)
  //});

  When(/^I type '(.*)' as email$/, async function (email) {
        await hotelsPage.enterIvEmail(email);
    await browser.pause(1000)
});



Then(/^enter invalid password$/ , async function () {
    await hotelsPage.enterIvPassword();
   await browser.pause(1000)
  });
Then(/^click sign in btn$/ , async function () {
    await hotelsPage.signInBtn();
   await browser.pause(5000)
  });


  Then(/^click on the sign in button$/ , async function () {
    await hotelsPage.clickSignInButton();
   await browser.pause(1000)
  
});


Then(/^verify error message is displayed$/ , async function () {
       const errMsg = await hotelsPage.isErrorMesShow()
  expect(errMsg ,'Error message is not displayed').to.be.true
  await browser.pause(1000)
});


//tc20 



Then(/^click terms and condition$/ , async function () {
    await hotelsPage.clickTermCon();
   await browser.pause(3000)
  
});


Then(/^verify terms and condition$/ , async function () {
    await hotelsPage.switchPage();
    await browser.pause(3000)
      await hotelsPage.checkTermCon();
  await browser.pause(3000)
});

//TC-18


Then(/^click first child$/ , async function () {
    await hotelsPage.childButton();
   await browser.pause(1000)
   await hotelsPage.childAge4(4)
   await browser.pause(1000)
});


Then(/^click on children$/ , async function () {
    await hotelsPage.childrenButton(3);
   await browser.pause(1000)
});


Then(/^click on adults$/ , async function () {
    await hotelsPage.adultAddButton(4);
   await browser.pause(1000)
});

Then(/^click on travelers$/ , async function () {
    await hotelsPage.clickOnTravelers();
});
//////////////////////////////////////////////////////////////

When(/^I change language to (.+)$/, async function (newLanguageOption) {
    await hotelsPage.changeLanguage(newLanguageOption)
});

Then(/^I verify language got changed to (.+)$/, async function (expLanguage) {
    const languageOnWeb = await hotelsPage.getLanguageFromWeb()
    
    expect(languageOnWeb, 'Language is not updated as expected').to.equal(expLanguage)
});





Then(/^verify feedback message$/ , async function () {
    await hotelsPage.feedbackMessage();
    await browser.pause(1000)
});


Then(/^select submit button$/ , async function () {
    await hotelsPage.selectOnSubmitButton();
    await browser.pause(1000)
});



Then(/^what accomplished$/ , async function () {
    await hotelsPage.whatAccomplish();
    await browser.pause(1000)
});


Then(/^ever booked hotel$/ , async function () {
    await hotelsPage.everBooked();
    await browser.pause(1000)
});

Then(/^select option$/ , async function () {
    await hotelsPage.OptionReturn();
   await browser.pause(3000)
await hotelsPage.highUnlike();
await browser.pause(3000)
});




Then(/^enter comment$/ , async function () {
    await hotelsPage.enterComments();
   
});

Then(/^click star rating$/ , async function () {
    await hotelsPage.switchPage();
   await browser.pause(3000)
    await hotelsPage.selectRating()
});



Then(/^is star section in red dotted box$/ , async function () {
    await hotelsPage.redDottedBox();
    await browser.pause(3000)
});


Then(/^verify error message$/ , async function () {
    await hotelsPage.isErrorFillDisplayed();
    await browser.pause(3000)
});



Then(/^is error displayed$/ , async function () {
    await hotelsPage.isPhoneErrorDisplayed();
    await browser.pause(3000)
});




Then(/^click on get app$/ , async function () {
    await hotelsPage.clickGetTheApp();
    await browser.pause(3000)
});



Then(/^enter phone number$/ , async function () {
    await hotelsPage.enterNumber();
   
});




Then(/^click submit$/ , async function () {
    await hotelsPage.switchPage();
   await browser.pause(3000)
    await hotelsPage.clickSubmit()
});


Then(/^I click english$/ , async function () {
    await hotelsPage.clickEnglish();
});




Then(/^scroll to get app$/ , async function () {
    await hotelsPage.scrollToApp();
});


When(/^click on submit$/ , async function () {
    await hotelsPage.clickSubmit();
});

When(/^click on feedback$/ , async function () {
    await hotelsPage.clickOnFeedback();
});


When(/^click on sign in$/ , async function () {
    await hotelsPage.clickOnSignIn();
});


When(/^I clicked dates$/ , async function () {
    await hotelsPage.clickOnDates();
});
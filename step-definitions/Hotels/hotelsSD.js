const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
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



//TC-18


Then(/^click first child$/ , async function () {
    await hotelsPage.childButton();
   await browser.pause(2000)
   await hotelsPage.childAge4()   
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
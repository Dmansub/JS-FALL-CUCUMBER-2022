const LoginErrorPage = require('../../POM/facebook/LoginErrorPage')
const { Given, When } = require("@wdio/cucumber-framework");
const { expect } = require('chai');
const LoginPage = require('../../POM/facebook/LoginPage')
const instagram = require('../../POM/facebook/instagram')

const loginErrorPage = new LoginErrorPage();
const loginPage = new LoginPage();
const Instagram = new instagram()
// glu code
//glue code is regular expression which helps to map scenario-steps 

When(/^I click on Instagram $/ , async function () {
    await  Instagram.clickInstagram();
    await browser.pause(5000);
  })
const {$} = require('@wdio/globals');

const usernameTextBox = '#ap_email_login';
const continueButton = "//input[@aria-labelledby='continue-announce']";
const passwordTextBox = '#ap_password';
const signInButton = '#signInSubmit';

class LoginPage{
    async enterUsername(username){
        await $(usernameTextBox).waitForDisplayed();
        if(await $(usernameTextBox).isDisplayed())
            await $(usernameTextBox).setValue(username);
    }

    async clickContinue(){
        await $(continueButton).click();
    }

    async enterPassword(password){
        await $(passwordTextBox).waitForDisplayed();
        if(await $(passwordTextBox).isDisplayed())
            await $(passwordTextBox).setValue(password);
    }

    async clickSignIn(){
        await $(signInButton).click();
    }

    async checkSignIn(){
        if(browser.getTitle()=='Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
            return true;
        else   
            return false;
    }
}

module.exports = new LoginPage();
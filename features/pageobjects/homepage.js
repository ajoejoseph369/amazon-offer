const {$} = require("@wdio/globals");

const signInbtn = '#nav-link-accountList-nav-line-1';
const todaysDeals = '//*[@data-csa-c-slot-id="nav_cs_4"]';

class HomePage{

    async getUrl(){
        await browser.url('https://www.amazon.in');
        await browser.maximizeWindow();
    }

    async clickSignIn(){
        await $(signInbtn).waitForDisplayed();
        if(await $(signInbtn).isDisplayed())
            await $(signInbtn).click();
    }

    async checkLoginRedirection(){
        if(browser.getTitle()=='Amazon Sign In')
            return true;
        else
            return false;
    }

    async navigateToDealsPage(){
        await $(todaysDeals).waitForDisplayed();
        if(await $(todaysDeals).isDisplayed())
            await $(todaysDeals).click();
    }

    async checkDealsRedirection(){
        if(browser.getTitle()=='Amazon.in - Deals')
            return true;
        else
            return false;
    }


}

module.exports = new HomePage();
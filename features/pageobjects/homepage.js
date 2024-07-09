const {$} = require("@wdio/globals");

const signInbtn = '#nav-link-accountList-nav-line-1';
const todaysDeals = '//*[@data-csa-c-slot-id="nav_cs_4"]';

class HomePage{

    async getUrl(){
        await browser.url('https://www.amazon.in');
        await browser.maximizeWindow();
    }

    async clickSignIn(){
        await $(signInbtn).click();
    }

    async checkLoginRedirection(){
        if(browser.getTitle()=='Amazon Sign In')
            return true;
        else
            return false;
    }

    async navigateToDealsPage(){
        await $(todaysDeals).click();
        await browser.pause(3000);
    }

    async checkDealsRedirection(){
        if(browser.getTitle()=='Amazon.in - Deals')
            return true;
        else
            return false;
    }


}

module.exports = new HomePage();
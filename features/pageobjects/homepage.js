const {$} = require("@wdio/globals");

const signInbtn = '#nav-link-accountList-nav-line-1';


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

}

module.exports = new HomePage();
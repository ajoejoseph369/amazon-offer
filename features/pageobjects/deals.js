const {$} = require("@wdio/globals");

const firstDeal = '(//div[contains(@class,"GridRow-module")])[1]/div[contains(@class,"GridItem-module")][1]'

class Deals{
    async selectFirstDeal(){
        await $(firstDeal).waitForDisplayed({timeout:6000});
        if(await $(firstDeal).isDisplayed())
            await $(firstDeal).click();
    }
}

module.exports = new Deals();
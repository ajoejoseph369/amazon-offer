const {$} = require("@wdio/globals");

const addToCartBtn = '//input[@id="add-to-cart-button" and @type="submit"]';
const viewCartBtn = '//input[@aria-labelledby="attach-sidesheet-view-cart-button-announce"]';

class Product{
    async checkRedirectionToProductPage(){
        if(await $(addToCartBtn).isDisplayed())
            return true;
        else
            return false;
    }

    async addToCart(){
        await $(addToCartBtn).click();
    }

    async viewCart(){
        await $(viewCartBtn).waitForDisplayed({timeout:6000});
        if(await $(viewCartBtn).isDisplayed())
            await $(viewCartBtn).click();
    }

    async checkRedirectionToCart(){
        if(browser.getTitle()=='Amazon.in Shopping Cart')
            return true;
        else
            return false;
    }

}

module.exports = new Product();
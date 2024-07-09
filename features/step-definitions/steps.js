const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const HomePage = require('../pageobjects/homepage.js');
const LoginPage = require('../pageobjects/loginpage.js');
const Deals = require('../pageobjects/deals.js');
const Product = require('../pageobjects/product.js');
// const ResultsPage = require('../pageobjects/results.js');
// const ProductDescriptionPage = require('../pageobjects/product_description.js');

//homepage

Given(/^user is on homepage$/, async ()=> {
    await HomePage.getUrl();
});

When(/^user clicks sign in$/, async ()=>{
    await HomePage.clickSignIn();
} )

Then(/^user is redirected to login page$/, async ()=>{
    await HomePage.checkLoginRedirection();
})


Given(/^user is already on the homepage$/, async () => {
	return true;
});

When(/^user clicks Today's Deals button$/, async () => {
	await HomePage.navigateToDealsPage();
});

Then(/^user is redirected to Deals page$/, async () => {
	await HomePage.checkDealsRedirection();
});


//loginpage

Given(/^user is on the login page$/, async ()=>{
    return true;
})

When(/^user enters (.*) and clicks on continue button$/, async (username)=>{
    await LoginPage.enterUsername(username);
    await LoginPage.clickContinue();
})

Then(/^user enters (.*) and clicks on sign in button$/, async (password)=>{
    await LoginPage.enterPassword(password);
    await LoginPage.clickSignIn();
})

Then(/^user is redirected to homepage$/, async ()=>{
    await LoginPage.checkSignIn();
})


//deals page


Given(/^user is on the deals page$/, async () => {
	await HomePage.checkDealsRedirection();
});

When(/^user selects the first product$/, async () => {
	await Deals.selectFirstDeal();
});

Then(/^user is redirected to product description page$/, async () => {
	await Product.checkRedirectionToProductPage();
});

//product description page

Given(/^user is on the product description page$/, async () => {
	await Product.checkRedirectionToProductPage();
});

When(/^user clicks add to cart button$/, async () => {
	await Product.addToCart();
});

Then(/^user clicks view cart button$/, async () => {
	await Product.viewCart();
});

Then(/^cart is displayed$/, async () => {
	await Product.checkRedirectionToCart();
});



const { Given } = require('@cucumber/cucumber');
const navigation = require('../methods/navigation-methods');

const urls = {
    de: 'https://www.directferries.de',
    it: 'https://www.directferries.it',
    booking: 'https://account.directferries.com/?culture=en-GB',
    singIn: 'https://account.directferries.com/signin?tab=sign-in'
};

Given('I am on the German homepage', async function () {
    await navigation.onHomepage(urls.de);  
});

Given('I am on the Italian homepage', async function () {
    await navigation.onHomepage(urls.it); 
});

Given('I am on the Booking page', async function () {
    await navigation.onLoginForm(urls.booking);
});

Given('I am on the Sign In page', async function () {
    await navigation.onLoginForm(urls.singIn);
});

Given('I am on the homepage', async function () {
    await navigation.onHomepage(urls.singIn);
});
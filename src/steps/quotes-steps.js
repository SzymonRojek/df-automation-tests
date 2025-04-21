const { Given, When, Then } = require("@cucumber/cucumber");
const quotes = require("../methods/quotes-methods");

Given('I wait for quotes to load', async function () {
    await quotes.waitForQuotes();
});

Then('I am viewing route from {string} to {string}', async function (t, [portOut, portRet]) {
    await quotes.checkRouteIsPresent(portOut, portRet);
});
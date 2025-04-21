const { Given, When, Then } = require("@cucumber/cucumber");
const dealfinder = require("../methods/dealfinder-methods");

Given('I have selected route {string}', async function (t, [route]) {
    await dealfinder.selectRoute('single', route);
});

Given('I have selected foot passenger', async function (t) {
    await dealfinder.selectFootPassenger();
});

Given('I click Search on the dealfinder', async function (t) {
    await dealfinder.clickSearch();
});

Given('I have selected return route {string}', async function (t, [route]) {
    await dealfinder.selectRoute('return', route);
});

Given('I click different details for return trip', async function (t) {
    await dealfinder.clickDifferentDetails();
});
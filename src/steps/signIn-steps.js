const { Then } = require('@cucumber/cucumber');
const signIn = require('../methods/signIn-methods');

Then('I see error message when trying to Sign In with incorrect inputs', async function () {
    await signIn.verifyErrorAppearsWhenIncorrectInputs();
});
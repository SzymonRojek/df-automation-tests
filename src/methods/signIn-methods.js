const { Selector, t } = require('testcafe');

// Selectors
const emailInput = Selector('form[data-amplify-authenticator-signin] input[name="username"]');
const passwordInput = Selector('form[data-amplify-authenticator-signin] input[name="password"]');
const signInToggle = Selector('form[data-amplify-authenticator-signin] button[type="submit"]');
const errorMessage = Selector('.amplify-alert--error .amplify-alert__body');

module.exports = {
    verifyErrorAppearsWhenIncorrectInputs: async () => {
    await t
    .typeText(emailInput, 'sz.rojek@gmail.com') 
    .typeText(passwordInput, 'ED36vZK8eQ6z$Gn') 
    .expect(signInToggle.exists).ok('Sign In button does not appear')  
    .click(signInToggle)
    .wait(2000)
    .expect(errorMessage.withText('Incorrect username or password.').exists)
    .ok('Error alert did not appear after sign in attempt');
  }
};
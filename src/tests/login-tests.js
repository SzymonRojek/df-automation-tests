const { 
    verifyLoginWithInvalidInputsFail, 
    verifyLoginWithEmptyInputsFail } = require('../methods/login-methods.js');

fixture`Direct Ferries Login Test`
    .page`https://account.directferries.com/?culture=en-GB`;

test('Login with incorrect details should fail', async t => {
        await verifyLoginWithInvalidInputsFail(t);
});

test('Login without entering details should fail', async t => {
    await verifyLoginWithEmptyInputsFail(t);
});
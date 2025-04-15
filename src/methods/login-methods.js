const { Selector, t } = require('testcafe');

/// Input and error selectors
const emailInput = Selector('#Email');
const bookingRefInput = Selector('#BookingReference');
const loginButton = Selector('#manage-booking-button');
const errorEmail = Selector('#Email-error').with({ timeout: 2000 });
const errorBookingRef = Selector('#BookingReference-error').with({ timeout: 2000 });

const checkIfErrorsAreVisible = async () => {
    const emailErrorVisible = await errorEmail.exists && await errorEmail.visible;
    const bookingRefErrorVisible = await errorBookingRef.exists && await errorBookingRef.visible;

    await t.expect(emailErrorVisible || bookingRefErrorVisible)
        .ok('Expected at least one error message (Email or Booking Reference) to appear after login attempt');
};

const verifyLoginWithInvalidInputsFail = async () => {
    await t
        .typeText(emailInput, 'amazing')
        .typeText(bookingRefInput, 'bookingReference')
        .click(loginButton);

    await checkIfErrorsAreVisible();
};

const verifyLoginWithEmptyInputsFail = async () => {
    await t.click(loginButton);
    await checkIfErrorsAreVisible();
};

module.exports = {
    verifyLoginWithInvalidInputsFail,
    verifyLoginWithEmptyInputsFail
};
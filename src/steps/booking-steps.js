const { Then } = require('@cucumber/cucumber');
const booking = require('../methods/booking-methods');

Then('I see Email and Booking Reference errors on the Booking page', async function () {
    await booking.verifyEmailAndBookingReferenceErrorsAppear();
});

Then('I see Email error on the Booking page', async function () {
    await booking.verifyBookingWithOnlyInvalidEmail();
});

Then('I see Booking Reference error on the Booking page', async function () {
    await booking.verifyBookingWithOnlyInvalidBookingReference();
});

Then('I see Booking Not Found modal', async function () {
    await booking.verifyModalAppearsWhenNoEmailAndBookingReferenceErrors();
});
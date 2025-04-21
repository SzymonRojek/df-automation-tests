const { Selector, t } = require('testcafe');

// selectors
const manageMyBookingForm = Selector('#header-manage-booking');
const emailInput = Selector('#Email');
const bookingReferenceInput = Selector('#BookingReference');
const manageMyBookingButton = Selector('div[data-visible-on-design-type="rebranded"]')
    .find('button#manage-booking-button')
    .withText('Manage my booking');
const emailBookingError = Selector('#Email-error');
const bookingReferenceError = Selector('#BookingReference-error');
const bookingNotFoundModal = Selector('.modal-content');

module.exports = {
    verifyEmailAndBookingReferenceErrorsAppear: async () => {
        await t
        .click(manageMyBookingForm)
        .click(manageMyBookingButton)
        .expect(emailBookingError.exists).ok('Email error does not exist')
        .expect(bookingReferenceError.exists).ok('Booking Reference error did not appear');
    },
    verifyBookingWithOnlyInvalidEmail: async () => {
        await t
        .click(manageMyBookingForm)
        .typeText(emailInput, 'sz.rojekgmail.com')
        .typeText(bookingReferenceInput, 'DFP123456789')
        .click(manageMyBookingButton)
        .expect(emailBookingError.exists).ok('Email error did not appear');
    },
    verifyBookingWithOnlyInvalidBookingReference: async () => {
        await t
        .click(manageMyBookingForm)
        .typeText(emailInput, 'sz.rojek@gmail.com')
        .typeText(bookingReferenceInput, '123123')
        .click(manageMyBookingButton)
        .expect(bookingReferenceError.exists).ok('Booking Reference error did not appear');
    },
    verifyModalAppearsWhenNoEmailAndBookingReferenceErrors: async () => {
    await t
        .click(manageMyBookingForm)
        .typeText(emailInput, 'sz.rojek@gmail.com')
        .typeText(bookingReferenceInput, 'DFP123456789')
        .click(manageMyBookingButton)
        .expect(bookingNotFoundModal.exists).ok('Booking Not Found modal did not appear');
    }
};
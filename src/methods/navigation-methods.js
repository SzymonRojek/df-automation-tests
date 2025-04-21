const { Selector, t } = require('testcafe');

module.exports = {
    onHomepage: async function (url) {
        // Navigate to the homepage and accept cookie consent
        await t
            .navigateTo(url)
            .click(Selector('[data-cky-tag="accept-button"]'));
    },
    onLoginForm: async function (url) {
        await t
        .navigateTo(url);
    },
};
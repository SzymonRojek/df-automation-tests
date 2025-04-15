const { Selector, t } = require('testcafe');

module.exports = {
    onHomepage: async function () {
        await t
        .navigateTo('https://www.directferries.de')
        .click(Selector('[data-cky-tag="accept-button"]'));
    }
}
const { Selector, t } = require('testcafe');

module.exports = {
    onHomepage: async function (url) {
        await t
            .navigateTo(url)
        
        if (!(url.includes('.uk'))) {
            const acceptButton = Selector('[data-cky-tag="accept-button"]');
            await t.click(acceptButton);
        }
    },
    onLoginForm: async function (url) {
        await t
        .navigateTo(url);
    },
};
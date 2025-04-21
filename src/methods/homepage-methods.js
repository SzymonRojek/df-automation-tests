const { Selector, t } = require('testcafe');

module.exports = {
    topDestinationsPresent: async function () {
        await t
        .expect(Selector('[data-testid=home-top-destinations]').exists).ok()
    },
    offersPresent: async function () {
        await t
        .expect(Selector('[data-testid=special-offers]').exists).ok()
        .expect(Selector('[data-testid=special-offers]').find('li').count).gte(3)
    },
    popularOperatorsPresent: async function () {
        await t
        .expect(Selector('[data-testid=home-ferry-companies]').exists).ok()
        .expect(await Selector('[data-testid=home-ferry-companies]').find('.ferry-logo').count).gte(16)
    }
};
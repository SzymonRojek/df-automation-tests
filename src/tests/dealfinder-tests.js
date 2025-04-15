const {
    selectRoute,
    selectFootPassenger,
    clickSearch,
    clickDifferentDetails
} = require('../methods/dealfinder-methods.js');

fixture`Dealfinder Journey`
    .page`https://www.directferries.de`
    .skipJsErrors(true); // ignoring JS bugs on the page — for E2E

    test('Full journey: route selection, foot passenger and search', async () => {
        //await clickPopup();
        await selectRoute('single', 'Dover to Calais');
        await clickDifferentDetails();
        await selectRoute('return', 'Calais to Dover');
        await selectFootPassenger();
        await clickSearch();
    });
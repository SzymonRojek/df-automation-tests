const {
    selectRoute,
    selectFootPassenger,
    clickSearch,
    clickDifferentDetails,
    clickPopup
} = require('../methods/dealfinder-methods.js');

fixture`Dealfinder Journey`
    .page`https://www.directferries.de`
    .skipJsErrors(true); // ignoring JS bugs on the page — for E2E

test('User selects a single route and searches as foot passenger', async t => {
    await clickPopup(t);
    await selectRoute('single', 'Dover to Calais');
    await selectFootPassenger();
    await clickSearch();
});


test('User selects different outbound and return routes and searches', async t => {
    await clickPopup(t);
    await clickDifferentDetails();
    await selectRoute('single', 'Dover to Calais');
    await selectRoute('return', 'Calais to Dover');
    await selectFootPassenger();
    await clickSearch();
});
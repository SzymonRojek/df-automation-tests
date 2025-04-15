/*const { Selector, t } = require('testcafe');

async function getRoute(leg) {
    if (leg === "return") {
        return Selector("[data-testid=return-route-container]", { timeout: 20000 })
    }
    return Selector('[data-testid=outbound-route-container]', { timeout: 20000 })
}
module.exports = {

    selectRoute: async function (leg, route) {
        await t
            .typeText(await getRoute(leg), " ") //type a space first as we sometimes have issues where the first type text doesn't register
            .typeText(await getRoute(leg), route)
            .click(await getRoute(leg))
        await t
              .click(Selector('[data-testid=result-section-0] button'))
              .scroll('top')//only needed for tablet sized screens to scroll to top after click.
    },
    clickSearch: async function () {
        await t.click(Selector("[data-testid=button-submit]"));
    },
    clickDifferentDetails: async function () {
        await t.click(Selector('[data-testid=radio-button-different-outbound-return-details]'));
    },
    selectFootPassenger: async function () {
        await t.click(Selector('[data-testid=vehicle-display]'))
        await t.click(Selector('[data-testid=vehicle-list-type--1]'))
    },
}
*/

const { Selector, t } = require('testcafe');

const getRoute = async (leg) => {
    return leg === 'return'
        ? Selector('[data-testid=return-route-container]').with({ timeout: 20000 })
        : Selector('[data-testid=outbound-route-container]').with({ timeout: 20000 });
};

const clickPopup = async () => {
    const dealfinderContainer = Selector('#deal_finder_container');
    const popupContainer = Selector('.cky-notice').with({ visibilityCheck: true });
    const cookieButton = Selector('.cky-btn.cky-btn-accept').with({ visibilityCheck: true });

    if (await dealfinderContainer.exists && await popupContainer.visible) {
        try {
            await t
                .expect(cookieButton.exists).ok('Cookie accept button not found')
                .click(cookieButton);
            console.log('Popup accepted');
        } catch (e) {
            console.log('Cookie popup appeared but could not be clicked. Skipping.');
        }
    } else {
        console.log('Cookie popup not visible, skipping.');
    }
};

const selectRoute = async (leg, route) => {
    const routeInput = await getRoute(leg);
    await t
        .expect(routeInput.exists).ok(`Route input for "${leg}" does not exist`, { timeout: 20000 })
        .expect(routeInput.visible).ok(`Route input for "${leg}" is not visible`, { timeout: 20000 })
        .click(routeInput)
        .typeText(routeInput, ' ', { replace: true }) // type '' for input activation
        .typeText(routeInput, route, { replace: true });

    const resultButton = Selector('[data-testid=result-section-0] button');

    await t
        .expect(resultButton.exists).ok('First result button not found', { timeout: 10000 })
        .click(resultButton)
        .scroll('top'); // scroll for mobile devices
};

const clickSearch = async () => {
    const searchBtn = Selector('[data-testid=button-submit]');
    await t
        .expect(searchBtn.exists).ok('Search button not found', { timeout: 10000 })
        .click(searchBtn);
};

const clickDifferentDetails = async () => {
    const radioBtn = Selector('[data-testid=radio-button-different-outbound-return-details]');
    await t
        .expect(radioBtn.exists).ok('Different details radio button not found', { timeout: 10000 })
        .click(radioBtn);
};

const selectFootPassenger = async () => {
    const vehicleDisplay = Selector('[data-testid=vehicle-display]');
    const footPassenger = Selector('[data-testid=vehicle-list-type--1]');

    await t
        .expect(vehicleDisplay.exists).ok('Vehicle display not found', { timeout: 10000 })
        .click(vehicleDisplay)
        .expect(footPassenger.exists).ok('Foot passenger option not found', { timeout: 10000 })
        .click(footPassenger);
};

module.exports = {
    getRoute,
    clickPopup,
    selectRoute,
    clickSearch,
    clickDifferentDetails,
    selectFootPassenger
};
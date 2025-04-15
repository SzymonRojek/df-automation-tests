const { Selector } = require('testcafe');

const verifyTopDestinationsSection = site =>
    test(`${site.name}: Top Destinations section exists`, async t => {
        const section = Selector('[data-testid=home-top-destinations]');
        await t
            .expect(section.exists)
            .ok('Top destinations section not found');
    });

const verifyTopDestinationsCount = site =>
    test(`${site.name}: Top Destinations has at least 6 items`, async t => {
        const section = Selector('[data-testid=home-top-destinations]');
        const items = section.find('li');
        await t
            .expect(items.count)
            .gte(6, 'Less than 6 top destination items found');
    });

const verifySpecialOffersSection = site =>
    test(`${site.name}: Special Offers section has at least 3 offers`, async t => {
        const section = Selector('[data-testid=special-offers]');
        await t
            .expect(section.exists).ok('Special offers section not found')
            .expect(section.find('li').count).gte(3, 'Less than 3 special offers found');
    });

const verifyOperatorsLogosCount = site =>
    test(`${site.name}: Popular Operators section with at least 16 logos`, async t => {
        const section = Selector('[data-testid=home-ferry-companies]');
        const logos = section.find('.ferry-logo');
        await t
            .expect(section.exists).ok('Popular ferry operators section not found')
            .expect(logos.count).gte(16, 'Less than 16 ferry logos found');
    });

/*** additional tests examples ***/

// Function to verify the text inside <h1> matches the expected text
const verifyHeadingText = async (t, headingSelector, expectedText) => {
    const headingText = await headingSelector.innerText;
    await t
        .expect(headingText.trim())
        .eql(expectedText, `Expected <h1> text to be "${expectedText}" but got "${headingText}"`);
};

// Function to check if <h1> exists inside .wrapper and has the correct text based on the language
const verifyH1InsideWrapper = site =>
    test(`${site.name}: <h1> heading exists inside .wrapper and has correct text`, async t => {
        const heading = Selector('.wrapper h1');
        
        // Mapping of expected <h1> texts based on the site language
        const expectedTexts = {
            en: 'Ferry Tickets',             // English text
            it: 'Biglietti per i vostri traghetti'  // Italian text
        };
     
        const expected = expectedTexts[site.lang];

        await t
            .expect(heading.exists).ok('<h1> not found inside .wrapper');
        
        await verifyHeadingText(t, heading, expected);
    });

const verifyHtmlLangAttribute = site =>
    test(`${site.name}: <html> has lang="${site.lang}"`, async t => {
        const html = Selector('html');
        const langAttr = await html.getAttribute('lang');

        await t
            .expect(langAttr)
            .eql(site.lang, `Expected lang="${site.lang}" but got "${langAttr}"`);
    });

module.exports = {
    verifyTopDestinationsSection,
    verifyTopDestinationsCount,
    verifySpecialOffersSection,
    verifyOperatorsLogosCount,
    verifyH1InsideWrapper,
    verifyHtmlLangAttribute,
};
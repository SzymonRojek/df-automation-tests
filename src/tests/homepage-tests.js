const {
    verifyTopDestinationsSection,
    verifyTopDestinationsCount,
    verifySpecialOffersSection,
    verifyOperatorsLogosCount,
    verifyH1InsideWrapper,
    verifyHtmlLangAttribute,
} = require('../methods/homepage-methods');

const sites = [
    { url: 'https://www.directferries.co.uk/', lang: 'en', name: 'UK site' },
    { url: 'https://www.directferries.it/', lang: 'it', name: 'Italian site' }
];

sites.forEach(site => {
    fixture`Testing ${site.name}`
        .page(site.url)
        .skipJsErrors(true);

    verifyTopDestinationsSection(site);
    verifyTopDestinationsCount(site);
    verifySpecialOffersSection(site);
    verifyOperatorsLogosCount(site);
    verifyH1InsideWrapper(site);
    verifyHtmlLangAttribute(site);
});
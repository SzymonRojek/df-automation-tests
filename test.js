async function getErrorClass() {
    await t
    .navigateTo('https://account.directferries.com/?culture=en-GB')
    .typeText(emailInput, 'amazing')
    .typeText(bookingRefInput, 'bookingReference')
    //.click(loginButton);
};

await getErrorClass();
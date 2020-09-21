
module.exports = {

    'Verify product size fields' : function (browser) {

        const cart = browser.page.cartIconPage();
        const products = browser.page.productPage();
        const gear = browser.page.descriptionGearShirtPage();

        cart.navigate()
            .verifyUrl()

        browser.windowMaximize()

        cart.closeNewsletterWindow()
            .clickProducts()

        products.verifyTitle()
        .selectGearShirt()

        gear.verifyProductTitle()
        .verifySizeS()
        browser.pause(1000)

        gear.verifySizeM()
        
        gear.verifySizeL()
        
        browser.end()        
}
};


module.exports = {

    'Verify product description' : function (browser) {

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
        .verifyPriceCompare()
        .verifyPrice()
        
        browser.end()        
}
};

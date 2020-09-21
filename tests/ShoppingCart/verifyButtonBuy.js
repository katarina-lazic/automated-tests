
module.exports = {

    'Verify the button buy works correctly' : function (browser) {

        const cart = browser.page.cartIconPage();
        const products = browser.page.productPage();
        const bottle = browser.page.addBottlePage();
        const shop = browser.page.shoppingCartPage();
        const checkout = browser.page.checkoutPage();

        cart.navigate()
            .verifyUrl()

        browser.windowMaximize()

        cart.closeNewsletterWindow()
            .clickProducts()

        products.verifyTitle()
        .selectBottle()

        bottle.verifyNameProduct()
        .setQuantityOne(1)
        .addItem()
        browser.pause(7000)
        bottle.goToShoppingCartPage()

        shop.verifyTitle()
        .clickButtonBuy()
        checkout.verifyCheckout()

        browser.end()         
}
};

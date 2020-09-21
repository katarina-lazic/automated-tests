
module.exports = {

    'Verify product link works correctly' : function (browser) {

        const cart = browser.page.cartIconPage();
        const products = browser.page.productPage();
        const bottle = browser.page.addBottlePage();
        const shop = browser.page.shoppingCartPage();

        cart.navigate()
            .verifyUrl()

        browser.windowMaximize()

        cart.closeNewsletterWindow()
            .clickProducts()

        products.verifyTitle()
        .selectBottle()

        bottle.verifyNameProduct()
        .setQuantityOne(2)
        .addItem()
        browser.pause(6000)
        bottle.goToShoppingCartPage()

        shop.verifyTitle()
        .verifyItemInCart()

        bottle.verifyNameProduct()

        browser.end()         
}
};

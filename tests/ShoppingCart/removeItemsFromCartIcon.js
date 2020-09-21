
module.exports = {

    'Remove Items from the cart icon' : function (browser) {

        const cart = browser.page.cartIconPage();
        const products = browser.page.productPage();
        const bottle = browser.page.addBottlePage();
        const shirt = browser.page.addShirtPage();

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
        browser.pause(2000)
        bottle.clickOnProducts()

        products.verifyTitle()
        .selectShirt()

        shirt.verifyProductTitle()
        .setQuantity(2)
        .setSize()
        .addShirt()
        browser.pause(1000)

        shirt.verifyAddedProducts()
        .removeAllItems(1)
        browser.pause(2000)
        shirt.verifyCartEmpty()

        browser.end()         
}
};

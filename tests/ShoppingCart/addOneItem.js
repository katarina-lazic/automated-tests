
module.exports = {

    'Add one product to the cart' : function (browser) {

        const cart = browser.page.cartIconPage();
        const products = browser.page.productPage();
        const add = browser.page.addBottlePage();

        cart.navigate()
            .verifyUrl()

        browser.windowMaximize()

        cart.closeNewsletterWindow()
            .clickProducts()

        products.verifyTitle()
                .selectBottle()

        add.verifyNameProduct()
           .setQuantityOne(1)
           .addItem()
        browser.pause(2000)
        add.verifyAddedProduct()

        browser.end()          

          }    
};
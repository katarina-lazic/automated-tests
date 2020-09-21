
module.exports = {

    'Add two products to the cart' : function (browser) {

        const cart = browser.page.cartIconPage();
        const products = browser.page.productPage();
        const add = browser.page.addBottlePage();
        const two = browser.page.addShirtPage();

        cart.navigate()
            .verifyUrl()

        browser.windowMaximize()

        cart.closeNewsletterWindow()
            .clickProducts()

        products.verifyTitle()
                .selectBottle()

        add.verifyNameProduct()
           .setQuantityOne(2)
           .addItem()
           browser.pause(3000)
           add.clickOnProducts()

        products.verifyTitle()
        .selectShirt()
        browser.pause(1000)
        
        two.verifyProductTitle()
        .setQuantity(1)
        .setSize()
        .addShirt()
      //  browser.pause(2000)
        two.verifyAddedProducts()

        browser.end()          

          }    
};
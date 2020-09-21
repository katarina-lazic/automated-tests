
module.exports = {

    'Edit quantity of the item with invalid inputs' : function (browser) {

        const cart = browser.page.cartIconPage();
        const products = browser.page.productPage();
        const towel = browser.page.quantityTowelPage();

        cart.navigate()
            .verifyUrl()

        browser.windowMaximize()

        cart.closeNewsletterWindow()
            .clickProducts()

        products.verifyTitle()
        .selectTowel()

        towel.verifyProductTitle()
        .setQuantity('*')
        .addTowel()
        browser.pause(500)
        towel.verifyMessage()
        browser.pause(8000)

        towel.setQuantity('A')
        .addTowel()
        browser.pause(500)
        towel.verifyMessage()
        browser.saveScreenshot('./tests/ShoppingCart/screenshots/inputCharacterA.png')
        browser.pause(8000)

        towel.setQuantity(0)
        .addTowel()
        browser.pause(500)
        towel.verifyMessage()

        browser.end()        
}
};


module.exports = {

    'Adding each size for same prodcut' : function (browser) {

        const cart = browser.page.cartIconPage();
        const products = browser.page.productPage();
        const size = browser.page.addEachSizePage();

        cart.navigate()
            .verifyUrl()

        browser.windowMaximize()

        cart.closeNewsletterWindow()
            .clickProducts()

        products.verifyTitle()
                .selectBlackShirt()

        size.verifyProductName()
        .addSizeS(2)
        browser.pause(5000)
        size.addSizeM(3)
        browser.pause(5000)
        size.addSizeL(2)
        browser.pause(5000)
        size.addSizeXl(1)
        browser.pause(5000)
        size.verifyAddedProducts()

        browser.end()         
}
};

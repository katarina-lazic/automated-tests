
module.exports = {

'Verify available item quantity in stock' : function(browser) {

    const cart = browser.page.cartIconPage();
    const products = browser.page.productPage();
    const arr = browser.page.addShirtPage(); 

    cart.navigate()
            .verifyUrl()

    browser.windowMaximize()

    cart.closeNewsletterWindow()
            .clickProducts()

    products.verifyTitle()
    .selectShirt()

    arr.verifyProductTitle()
    .setQuantity(300)
    .addToCartButton()
    .outOfStockMessage()

    
    browser.end()

 }
}
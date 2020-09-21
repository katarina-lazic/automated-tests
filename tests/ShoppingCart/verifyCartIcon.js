
module.exports = {

    'Verify shopping cart icon' : function (browser) {

        const cart = browser.page.cartIconPage();

        cart.navigate()
            .verifyUrl()
        browser.windowMaximize()
            cart.closeNewsletterWindow()
            .verifyTitle()
            .verifyCartIcon()
            .mouseOverCartIcon()
            .varifyEmptySlidedownCartContains()
         
        browser.end()          

          }    
};
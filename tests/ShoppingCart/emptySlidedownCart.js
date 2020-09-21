module.exports = {

    'Verify empty slidedown shopping cart' : function (browser) {

        const cart = browser.page.cartIconPage();

        cart.navigate()
        .verifyUrl()
        browser.windowMaximize()
        cart.closeNewsletterWindow()
        browser.getText('div#cartCount', function(result) {
            console.log(result);
            if(result.value == '0') 
            {
              cart.varifyEmptySlidedownCartContains();
            } else 
            {
              console.log('Message is not visible.');
            }
          })

        browser.end()          
  }    
};
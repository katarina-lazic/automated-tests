module.exports = {

    url:'https://shop.fitpass.rs/',
    
    elements: {
        newsletter: 'div#email-modal:nth-child(1) div.window-window a.btn.close',
        cartIcon: 'a#ToggleDown',
        cartCount: 'div#cartCount',
        slidedownCart: 'div#slidedown-cart',
        emptyCartText: 'div#slidedown-cart div.no-items p:nth-child(1)',
        products: 'ul.site-nav li:nth-child(2)',
        buttonContinue: 'div#slidedown-cart div.no-items p:nth-child(2) a'

    },

    commands: [{

        verifyUrl: function() {
            return this.expect.url().to.contain('https://shop.fitpass.rs/');
        },

        verifyTitle: function(){
            return this.getTitle(function(result){
              console.log(result)
              this.assert.equal(result, 'Originalna Sportska Oprema Najboljeg Kvaliteta | Fitpass Gear – FitPass Gear');
            })
          },

        closeNewsletterWindow: function() {
            return this.waitForElementVisible('@newsletter', 3000)
                       .click('@newsletter');
        },

        verifyCartIcon: function() {
            return this.waitForElementPresent('@cartIcon', 3000, 'Cart icon is present on the page')
                       .assert.visible('@cartCount')
                       .getText('@cartCount', (result) => {
                            console.log(result);
                            this.assert.equal(result.value, '0');
                        })     
        },

        mouseOverCartIcon: function() {
            return this.waitForElementVisible('@cartIcon', 4000, 'Element is present')
                       .moveToElement('@cartIcon', 1, 1);  
            },

        varifyEmptySlidedownCartContains: function() {
            return this.moveToElement('@cartIcon', 1, 1)
                       .assert.visible('@slidedownCart')
                       .getAttribute('@emptyCartText', 'textContent', function(result)
                        {
                           console.log(result);
                           this.assert.equal(result.value, 'Tvoja korpa je trenutno prazna!');
                        })
                        .getText('@buttonContinue', function(result) {
                            console.log(result);
                            this.assert.equal(result.value, 'Nastavi sa kupovinom')
                        })
        },

        clickProducts: function() {
            return this.waitForElementVisible('@products', 6000, 'Element is visible.')
                       .pause(1000)
                       .click('@products');
                     
        }

    }]
}
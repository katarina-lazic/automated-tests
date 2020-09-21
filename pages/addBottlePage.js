module.exports = {

    elements: {
        productName: 'div.grid-uniform div:nth-child(2) h2.product-single__title',
        quantity: 'input#quantity[value="1"]',
        addToCartButton: 'button#AddToCart',
        message: 'div.ajax-left p.added-to-cart.info',
        products: 'ul.site-nav li:nth-child(2) a.current',
        cart: 'a#ToggleDown',
        bottle: 'div.product-details p.product-name a',
        checkOrder: 'button.btn.text-cart'
    
    },

    commands: [{

        verifyNameProduct: function() {
            return this.assert.visible('@productName')
            .getAttribute('@productName', 'textContent', function(result) {
                console.log(result);
                this.assert.equal(result.value, 'FitPass boca za vodu');
            })
        },

        setQuantityOne: function(n) {
            return this.click('@quantity')
            .clearValue('@quantity')
            .setValue('@quantity', n, function() {
                console.log('Quantity is set on:' + n);
            })
        },

        addItem: function() {
            return this.assert.visible('@addToCartButton')
            .click('@addToCartButton', function() {
                console.log('I clicked on button add to cart.');
            })
            .pause(2000)
            .assert.containsText('@message', 'PROIZVOD JE USPEŠNO DODAT U KORPU')
        },

        verifyAddedProduct: function() {
            return this.waitForElementVisible('@cart', 6000, 'Cart is visible.')
            .moveToElement('@cart', 1, 1)
            .assert.visible('@bottle')
            .getAttribute('@bottle', 'textContent', function(result) {
                console.log(result);
                this.assert.equal(result.value, 'FitPass boca za vodu');
            })

        },

        clickOnProducts: function() {
            return this.pause(2000)
            .waitForElementVisible('@products', 2000, 'Element is visible.')
            .pause(1000)          
            .click('@products');
                     
        },

        goToShoppingCartPage: function() {
            return this.waitForElementVisible('@cart', 2000)
            .moveToElement('@cart', 1, 1)
            .waitForElementVisible('@checkOrder', 1000)
            .click('@checkOrder', () => {
                console.log('I clicked on Pogledaj porudzbinu')
            })
        }

    }]
}
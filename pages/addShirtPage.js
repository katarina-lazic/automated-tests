module.exports = {

    elements: {
        productTitle: 'div.product-single h2.product-single__title',
        quantity: 'input#quantity[value="1"]',
        addToCartButton: 'button#AddToCart',
        message: 'div.ajax-left p.added-to-cart.info',
        cart: 'a#ToggleDown',
        addedItem: 'ul.mini-products-list li.item:nth-child(2) p.product-name a',
        addedShirt: 'ul.mini-products-list li.item:nth-child(1) p.product-name a',
        size: 'div.swatch-section div.swatch-element.m.available',
        removeItem: 'li.item:nth-child(1) a.btn-remove',
        cartCount: 'div#cartCount',
        error: 'div.modal-inner div.ajax-error-title'
    
    },

    commands: [{

        verifyProductTitle: function() {
            return this.assert.visible('@productTitle')
            .getAttribute('@productTitle', 'textContent', function(result) {
                console.log(result);
                this.assert.equal(result.value, 'FitPass Boss ženska majica');
            })
        },

        setQuantity: function(n) {
            return this.click('@quantity')
            .clearValue('@quantity')
            .setValue('@quantity', n, function() {
                console.log('Quantity is set on: ' + n);
            })
        },

        setSize: function() {
            return this.waitForElementVisible('@size', 2000)
            .click('@size', function(result) {
                console.log('I clicked M size');
            })
        },

        addShirt: function() {
            return this.assert.visible('@addToCartButton')
            .click('@addToCartButton', () => {
            console.log('Clicked on add to cart button')
            })
            .pause(1000)
            .assert.containsText('@message', 'PROIZVOD JE USPEŠNO DODAT U KORPU')
            //.expect.element('@message').text.to.contain('PROIZVOD JE USPEŠNO DODAT U KORPU').after(100);     
        },

        verifyAddedProducts: function() {
            return this.waitForElementVisible('@cart', 6000, 'Cart is visible.')
            .moveToElement('@cart', 1, 1)
            .assert.visible('@addedShirt')
            .getAttribute('@addedShirt', 'textContent', function(result) {
                console.log(result);
                this.assert.equal(result.value, 'FitPass Boss ženska majica - M');
            })
            .getAttribute('@addedItem', 'textContent', function(result) {
                console.log(result);
                this.assert.equal(result.value, 'FitPass boca za vodu')
            })

        },

        removeAllItems: function(n) {
            this.waitForElementVisible('@cart', 2000)
                 .moveToElement('@cart', 1, 1)
                .assert.visible('@removeItem')
            for (var i=0; i <= n; i++) {
            this.click('@removeItem', () => {
                console.log('Item is removed.')
            })
            .pause(200);
        }
        
        },

        verifyCartEmpty: function() {
            return this.waitForElementVisible('@cartCount', 2000)
            .pause(3000)
            .getText('@cartCount', function(result) {
                console.log(result);
               if(result.value == '0') {
                console.log('Items are successfuly removed');
                this.assert.equal(result.value, '0');
            } else {
                console.log('Cart is not empty');
            }
        })
        },

        addToCartButton: function() {
            return this.assert.visible('@addToCartButton')
            .click('@addToCartButton', () => {
            console.log('I clicked on add to cart button');
            })  
        },

        outOfStockMessage: function() {
            return this.getAttribute('@error', 'textContent', function(result) {
                console.log('Out of stock message should be displayed');
                this.assert.equal(result.value, 'Greška')
            })
            .saveScreenshot('./tests/ShoppingCart/screenshots/outOfStockMessage.png', ()=> {
                console.log('Photo is saved');
            })
        }

    }]
}
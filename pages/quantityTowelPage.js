module.exports = {

    elements: {
    productTitle: 'div.product-single h2.product-single__title',
    addToCartButton: 'button#AddToCart',
    quantity: 'input#quantity[name="quantity"]',
    message: 'div.ajax-left p.added-to-cart.info'
    },

    commands: [{

        verifyProductTitle: function() {
            return this.assert.visible('@productTitle')
            .getAttribute('@productTitle', 'textContent', function(result) {
                console.log(result);
                this.assert.equal(result.value, 'FitPass peškir');
            })
        },

        setQuantity: function(a) {
            return this.waitForElementVisible('@quantity', 1000)
            .click('@quantity')
            .clearValue('@quantity')
            .setValue('@quantity', a, function() {
                console.log('Quantity is set on: ' + a);
            })
        },

        addTowel: function() {
            return this.assert.visible('@addToCartButton')
            .click('@addToCartButton', () => {
            console.log('Clicked on add to cart button')
            })
        },

        verifyMessage: function() {
            return this.pause(1000)
            .getText('@message', function (result) {
            console.log(result);
            if(result.value == 'PROIZVOD JE USPEŠNO DODAT U KORPU') {
                console.log('This value is invalid, cart should not be updated');
            } else if(result.status == 0) { // value elementa se ne učita u svakom puštanju testa
                console.log('This value is invalid, cart should not be updated');
            } else {
                console.log('Error');
            }
            })
            .saveScreenshot('./tests/ShoppingCart/screenshots/inputCharacters.png', ()=> {
                console.log('Image is saved');
            })
        },


}]
};
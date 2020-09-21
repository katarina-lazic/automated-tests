module.exports = {

    elements: {
        title: 'nav.breadcrumb h1',
        itemBottle: 'div.grid.cart_items a.h5',
        price: 'div.grid__item.one-quarter:nth-child(1) span.h5',
        buttonBuy: 'div.cart_btn input[name="checkout"]'

    },

    commands: [{

        verifyTitle: function() {
            return this.assert.visible('@title')
            .getAttribute('@title', 'textContent', function(result) {
                console.log(result);
                this.assert.equal(result.value, 'Vaša korpa');
            })
        },

        verifyItemInCart: function() {
            return this.assert.visible('@itemBottle')
            .getAttribute('@itemBottle', 'textContent', function(result) {
                console.log(result);
                this.assert.equal(result.value, '\n                  FitPass boca za vodu\n                ')
            })
            .click('@itemBottle', () => {
                console.log('I clicked on link')
            })
        },

        clickButtonBuy: function() {
            return this.assert.visible('@buttonBuy')
               .click('@buttonBuy', () => {
                   console.log('I clicked on button buy');
               })
        }


    }]
}
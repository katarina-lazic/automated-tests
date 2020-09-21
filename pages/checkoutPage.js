module.exports = {

    elements: {
        header: 'h2#main-header',
    },

    commands: [{

        verifyCheckout: function() {
            return this.assert.visible('@header')
            .getAttribute('@header', 'textContent', function(result) {
                console.log(result);
                this.assert.equal(result.value, '\n        Kontakt informacije\n      ');
            })
            .saveScreenshot('./tests/ShoppingCart/screenshots/checkoutPage.png', () => {
                console.log('Image is saved');
            } )
        },


    }]
}
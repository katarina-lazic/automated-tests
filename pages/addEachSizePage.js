module.exports = {

    elements: {
        title: 'div.grid-uniform h2.product-single__title',
        sizeS: 'div.swatch-section div.swatch-element.s.available',
        sizeM: 'div.swatch-section div.swatch-element.m.available',
        sizeL: 'div.swatch-section div.swatch-element.l.available',
        sizeXl: 'div.swatch-section div.swatch-element.xl.available',
        quantity: 'input#quantity',
        buttonAddToCart: 'button#AddToCart',
        cartIcon: 'a#ToggleDown',
        message: 'div.ajax-left p.added-to-cart.info',
        verifyItemOne: 'li.item:nth-child(1) a[title="FitPass klasična muška majica - XL"]',
        verifyItemTwo: 'li.item:nth-child(2) a[title="FitPass klasična muška majica - L"]',
        verifyItemThree: 'li.item:nth-child(3) a[title="FitPass klasična muška majica - M"]',
        verifyItemFour: 'li.item:nth-child(4) a[title="FitPass klasična muška majica - S"]'
    
    },

    commands: [{

        verifyProductName: function() {
        return this.assert.visible('@title')
                            .getText('@title', function(result) {
                            console.log(result);
                             this.assert.equal(result.value, 'FitPass klasična muška majica');
              });
    },

    addSizeS: function(n) {
        return this.assert.visible('@sizeS')
        .click('@sizeS', () => {
            console.log('I clicked on size S');
        })
        .clearValue('@quantity')
        .setValue('@quantity', n, () => {
            console.log('Quantity is set on ' + n)
        })
        .click('@buttonAddToCart', () => {
            console.log('I clicked on add to cart button');
        })
        .pause(2000)
        .expect.element('@message').text.to.contain('PROIZVOD JE USPEŠNO DODAT U KORPU').after(200);
    },

    addSizeM: function(n) {
        return this.assert.visible('@sizeM')
        .click('@sizeM', () => {
            console.log('I clicked on size M');
        })
        .clearValue('@quantity')
        .setValue('@quantity', n, () => {
            console.log('Quantity is set on ' + n)
        })
        .click('@buttonAddToCart', () => {
            console.log('I clicked on add to cart button');
        })
        .pause(2000)
        .expect.element('@message').text.to.contain('PROIZVOD JE USPEŠNO DODAT U KORPU').after(200);
    },

    addSizeL: function(n) {
        return this.assert.visible('@sizeL')
        .click('@sizeL', () => {
            console.log('I clicked on size L');
        })
        .clearValue('@quantity')
        .setValue('@quantity', n, () => {
            console.log('Quantity is set on ' + n)
        })
        .click('@buttonAddToCart', () => {
            console.log('I clicked on add to cart button');
        })
        .pause(2000)
        .expect.element('@message').text.to.contain('PROIZVOD JE USPEŠNO DODAT U KORPU').after(200);
    },

    addSizeXl: function(n) {
        return this.assert.visible('@sizeXl')
        .click('@sizeXl', () => {
            console.log('I clicked on size Xl');
        })
        .clearValue('@quantity')
        .setValue('@quantity', n, () => {
            console.log('Quantity is set on ' + n)
        })
        .click('@buttonAddToCart', () => {
            console.log('I clicked on add to cart button');
        })
        .pause(2000)
        .expect.element('@message').text.to.contain('PROIZVOD JE USPEŠNO DODAT U KORPU').after(200);
    },

    verifyAddedProducts: function() {
        return this.assert.visible('@cartIcon')
        .moveToElement('@cartIcon', 1, 1)
        .waitForElementVisible('@verifyItemOne', 3000)
        .getAttribute('@verifyItemOne', 'title', (result) => {
        console.log(result);
        this.assert.equal(result.value, 'FitPass klasična muška majica - XL')
        })
        .getAttribute('@verifyItemTwo', 'title', (result) => {
            console.log(result);
            this.assert.equal(result.value, 'FitPass klasična muška majica - L')
            })
        .getAttribute('@verifyItemThree', 'title', (result) => {
             console.log(result);
                this.assert.equal(result.value, 'FitPass klasična muška majica - M')
                })
        .getAttribute('@verifyItemFour', 'title', (result) => {
             console.log(result);
             this.assert.equal(result.value, 'FitPass klasična muška majica - S')
                    })
    }

}]
};
module.exports = {

elements: {
     itemTitle: 'div.product-single h2.product-single__title',
     description: 'div.product-description.rte',
     price: 'div#ProductPrice',
     comparePrice: 'del#ComparePrice',
     size: 'div.swatch.clearfix div.header',
     sizeS: 'div.swatch-element.s.available',
     sizeM: 'div.swatch-element.m.available',
     sizeL: 'div.swatch-element.l.available',
     swS: 'input#swatch-0-s',
     swM: 'input#swatch-0-m',
     swL: 'input#swatch-0-l',
     imageOne: 'div.product-single div.grid-uniform div.grid__item.wide--one-half.post-large--one-half.large--one-half.product-img-box a:nth-child(3) img',
     imageTwo: 'div.product-single div.grid-uniform div.grid__item.wide--one-half.post-large--one-half.large--one-half.product-img-box a:nth-child(4) img',
     imageZoomOne: 'div.fancybox-slide.fancybox-slide--image.fancybox-slide--current.fancybox-slide--complete div.fancybox-image-wrap img',
     imageZoomTwo: 'div.fancybox-slide.fancybox-slide--image.fancybox-slide--current.fancybox-slide--complete img',
    arrowRight: 'button.fancybox-arrow.fancybox-arrow--right'
    },

commands: [{

    verifyProductTitle: function() {
        return this.waitForElementPresent('@itemTitle', 3000)
              .getTitle(function(result){
                console.log(result);
                this.assert.equal(result, 'FitPass Gear ženska majica');
                 })
        .assert.elementPresent('@description', 'Description is present');
    },

    verifyPriceCompare: function() {
        return this.waitForElementPresent('@comparePrice', 2000)
                             .getCssProperty('@comparePrice', 'text-decoration-line', function(result) {
                                 console.log(result, 'line-through');
        })
        .saveScreenshot('./tests/ProductDescription/screenshots/comparePrice.png', () => {
            console.log('Image is saved');
        } )       
    },

    verifyPrice: function() {
     return this.assert.visible('@price')
        .getText('@price', (result) => {
             console.log(result);
             this.assert.equal(result.value, '900.00 RSD');
         }) 
    },

    verifySizeS: function() {
        return this.assert.visible('@size')
        .assert.visible('@sizeS')
        .expect.element('@swS').to.be.selected
    },

    verifySizeM: function() {
        return this.assert.visible('@sizeM')
        .expect.element('@swM').not.to.be.selected
    },

    verifySizeL: function() {
        return this.assert.visible('@sizeL')
        .expect.element('@swL').not.to.be.selected
    }, 

    verifyImages: function() {
        return this.assert.visible('@imageOne')
        .assert.visible('@imageTwo')
    },
    
    verifyImageZoom: function() {
        return this.click('@imageOne', () => {
            console.log('I clicked on image');
        })
        .assert.visible('@imageZoomOne')
        .click('@arrowRight')
        .assert.visible('@imageZoomTwo', () => {
            console.log('Images are visible')
        });
    }

 }]
}
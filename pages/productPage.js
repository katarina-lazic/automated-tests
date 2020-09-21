module.exports = {

    elements: {
    title: 'nav.breadcrumb h1',
    bottle: 'div.products-grid-view ul li:nth-child(4)',
    shirt: 'div.products-grid-view ul li:nth-child(8)',
    blackShirt: 'div.products-grid-view ul li:nth-child(6)',
    towel: 'div.products-grid-view ul li:nth-child(3)',
    gear: 'div.products-grid-view ul li:nth-child(7)'

    },

    commands: [{

     verifyTitle: function() {
        return this.assert.visible('@title')
                            .getText('@title', function(result) {
                            console.log(result);
                             this.assert.equal(result.value, 'PROIZVODI');
              });
    },

    selectBottle: function() {
        return this.assert.visible('@bottle')
        .click('@bottle', () => {
          console.log('I clicked on bottle');
        });
    },

    selectShirt: function() {
      return this.assert.visible('@shirt')
      .pause(2000)
      .click('@shirt', () => {
        console.log('I clicked on shirt');
      })
    },

    selectBlackShirt: function() {
      return this.assert.visible('@blackShirt')
      .pause(2000)
      .click('@blackShirt', () => {
        console.log('I clicked on black shirt');
      })
    },

    selectTowel: function() {
      return this.assert.visible('@towel')
      .pause(2000)
      .click('@towel', () => {
        console.log('I clicked on towel');
      })
    },

    selectGearShirt: function() {
      return this.assert.visible('@gear')
      .pause(2000)
      .click('@gear', () => {
        console.log('I clicked on gear shirt');
      })
    }
}]
};
var flux = require('../../flux');

flux.registerStores({
    characters: require('./stores/character-store'),
})

module.exports = {
  actions: require('./actions'),

  getters: require('./getters'),
}
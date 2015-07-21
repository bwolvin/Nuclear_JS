var flux = require('../../flux')

exports.receiveAll = function(characters) {
  var results = characters[0].data.results;
  results.forEach(character => {
    flux.dispatch('addCharacter', { character })
  })
}
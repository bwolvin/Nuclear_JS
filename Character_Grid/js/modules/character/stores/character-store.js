var Nuclear = require('nuclear-js')
var toImmutable = Nuclear.toImmutable

module.exports = new Nuclear.Store({
  getInitialState() {
    return toImmutable({})
  },

  initialize() {
    this.on('addCharacter', addCharacter)
  }

})

function addCharacter(state, { character }) {
  var characterData = toImmutable(character)
  var name = characterData.get('name')

  return state.withMutations(hero => {
    hero.set(name, toImmutable({
        name: name
    }))
  })
}
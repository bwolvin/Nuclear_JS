var React = require('react');
var flux = require('../flux');
var Character = require('../modules/character');
var CharacterItem = require('./CharacterItem.react');

var CharacterGrid = React.createClass({
  mixins: [flux.ReactMixin],

  getDataBindings() {
    return {
      heroes: Character.getters.characters
    }
  },

  render: function() {
    var characterItems = this.state.heroes.map(character => {
      return (
        <CharacterItem characterData={character}/>
      );
    }, this);
    return (
        <div>{characterItems}</div>
    );
  }
});

module.exports = CharacterGrid;
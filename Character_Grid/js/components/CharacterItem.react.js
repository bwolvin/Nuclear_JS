var React = require('react');
var Character = require('../modules/character');

var CharacterItem = React.createClass({

  render: function() {
    var character = this.props.characterData;
    return (
        <div>{character}</div>
    );
   }
});

module.exports = CharacterItem;

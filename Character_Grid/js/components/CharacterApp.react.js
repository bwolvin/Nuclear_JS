var React = require('react');
var CharacterGrid = require('./CharacterGrid.react');

var CharacterApp = React.createClass({

  render: function() {
    return (
        <CharacterGrid />
    );
  }

});

module.exports = CharacterApp;
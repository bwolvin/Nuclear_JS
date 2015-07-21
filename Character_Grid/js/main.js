var Character = require('./modules/character');
var flux = require('./flux')
var CharacterApp = require('./components/CharacterApp.react');
var mockData = require('./mock-data')

Character.actions.receiveAll(mockData)

var React = require('react');
window.React = React; // export for http://fb.me/react-devtools

React.render(
  <CharacterApp />,
  document.getElementById('react')
);
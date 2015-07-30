'use strict';

var React = require('react');

var App = React.createClass({displayName: "App",
  render: function() {
    return (
      React.createElement("div", null, "A boilerplate for new React projects.")
    );
  }
});

React.render(React.createElement(App, null), document.getElementById('app'));
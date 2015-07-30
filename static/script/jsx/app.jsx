'use strict';

var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div>A boilerplate for new React projects.</div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
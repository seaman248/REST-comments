var React = require('react');

var C = React.createClass({displayName: "C",
	render: function(){
		return (React.createElement("h1", null, "asdf"));
	}
});

React.render(React.createElement(C, null), document.getElementById('comment_app'));
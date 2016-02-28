var React = require("react");
var DunnoMusic = require("./DunnoMusic.jsx")

module.exports = React.createClass({
	render: function() {
		return(
			<div>
			<DunnoMusic likes="ridiculous" />
			</div>
		)
	}
});
var React = require("react");

module.exports = React.createClass({
	render: function() {
		return(
			<div class="panel panel-default">
				{this.props.likes}
			</div>
		)
	}
});
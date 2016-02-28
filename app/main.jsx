var React = require("react");
var ReactDOM = require("react-dom");
var DunnoMain = require("./components/DunnoMain.jsx");

function render(){
    ReactDOM.render(<DunnoMain />, document.getElementById("container"));
}
render();
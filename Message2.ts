import React = require('react');

interface Props {
	message: string;
}

class Message2 extends React.Component<Props, any, any> {
	render() {
		return React.DOM.p({}, this.props.message);
	}
}

var contract = <React.ComponentClass<Props, any, any>>Message2;
export = contract;
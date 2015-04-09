import React = require('react');

interface Props {
	message: string;
}

class Message2 extends React.Component<Props, any> {
	render() {
		return React.createElement("p", {}, this.props.message);
	}
}

export = Message2
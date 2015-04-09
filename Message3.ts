import React = require('react');

interface Props {
	message: string;
}

class Message3 extends React.Component<Props, any> {
	render() {
        return <p>{ this.props.message }</p>;
	}
}

export = Message3
import React = require('react');

interface Props {
	name: string;
	art: string[];
}

class Entity extends React.Component<Props, any> {
	render() {
        return <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
		           <pre>{ this.props.art.join('\n') } </pre>
		           <p>{ this.props.name }</p>
		       </div>;
	}
}

export = Entity

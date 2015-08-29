import React = require('react');

class Entity extends React.Component<{name: string; art: string[]}, any> {
	render() {
        return <div style={ {  display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
		           <pre>{ this.props.art.join('\n') } </pre>
		           <p>{ this.props.name }</p>
		       </div>;
	}
}

export = Entity

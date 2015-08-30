import React = require('react');
import * as Model from '../Model.ts';

export default class Actor extends React.Component<Model.Entity, any> {
	render() {
        return <div style={ {  display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
		           <pre>{ this.props.art.join('\n') } </pre>
		           <p>{ this.props.name }</p>
		       </div>;
	}
}


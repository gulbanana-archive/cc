import React = require('react');
import * as Model from '../Model.ts';
import Actor from './Actor';

interface Props {
	entities: Model.Entity[];
}

interface State {
	width: number;
	height: number;
}

class Scene extends React.Component<Props, State> {
	state = {
		width: 0,
		height: 0,
	} as State

	actors = [] as { e: Model.Entity, p: Model.Position}[];

	componentDidMount() {
		this.updateDimensions()
		window.addEventListener("resize", () => this.updateDimensions());
	}

	componentWillUnmount() {
        window.removeEventListener("resize",() => this.updateDimensions());
    }

	updateDimensions() {
		var e = React.findDOMNode(this);
		this.actors = [];
		this.setState({ width: e.clientWidth, height: e.clientHeight });
    }

    render() {
		if (this.actors.length < this.props.entities.length) {
			var n = this.props.entities.length;
			var widthPerEntity = this.state.width / n;
			var x = widthPerEntity / 2;
			var y = this.state.height / 2;
			
			this.actors = this.props.entities.map((e) => {
				var p = new Model.Position(x, y);
				x += widthPerEntity;
				return {e, p};
			});
		}
		
        return <div style={ { height: '90vh' } }>{this.actors.map((a) => {
            return <div style={ { position: 'absolute', left: a.p.left, top: a.p.top } }><Actor {...a.e} /></div>;
        })}</div>;
	}
}

export = Scene;

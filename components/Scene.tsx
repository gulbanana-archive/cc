import React = require('react');
import Draggable = require('react-draggable');
import * as Model from '../Model';
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
		console.log("updim");
		var e = React.findDOMNode(this);
		this.actors = [];
		this.setState({ width: e.clientWidth, height: e.clientHeight });
    }

    render() {
		if (this.state.width == 0 || this.state.height == 0) {
			console.log("bailing: w " + this.state.width + " h " + this.state.height)
			return <div style={ { height: '90vh' } }/>;
		}
		
		if (this.actors.length < this.props.entities.length) {
			var n = this.props.entities.length;
			var widthPerEntity = this.state.width / n;
			var x = widthPerEntity / 2;
			var y = this.state.height / 2;
			
			this.actors = this.props.entities.map((e) => {
				var p = new Model.Position(x, y);
				x += widthPerEntity;
				console.log("positioning " + e.name + " at " + p)
				return {e, p};
			});
		}
		
        return <div style={ { height: '90vh' } }>{this.actors.map((a) => {
            return <Draggable handle=".handle" 
			                  start={ {x: a.p.left, y: a.p.top} } 
							  onStop={ (event:any, ui:any) => { a.p = ui.position; } }>
				<div style={ { position: 'absolute'} }>
					<div className="handle" style={ {zIndex: 2, background: "grey", width: "100", height: "20"} } />
					<Actor {...a.e} />
				</div>
			</Draggable>;
        })}</div>;
	}
}

export = Scene;

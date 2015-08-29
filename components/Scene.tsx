import React = require('react');
import Entity = require('./Entity');

interface Props {
	entities: {
		name: string;
		art: string[]
	}[]
}

interface State {
	width: number;
	height: number;
}

class Scene extends React.Component<Props, State> {
	state = {
		width: 0,
		height: 0
	}

	componentDidMount() {
		this.updateDimensions()
		window.addEventListener("resize", () => this.updateDimensions());
	}

	componentWillUnmount() {
        window.removeEventListener("resize",() => this.updateDimensions());
    }

	updateDimensions() {
		var e = React.findDOMNode(this);
        this.setState({ width: e.clientWidth, height: e.clientHeight });
    }

    render() {
        var n = this.props.entities.length;
        var widthPerEntity = this.state.width / n;
        var x = widthPerEntity / 2;
        var y = this.state.height / 2;

        return <div style={ { height: '90vh' } }>{this.props.entities.map((e) => {
            x += widthPerEntity;
            return <div style={ { position: 'absolute', left: x-widthPerEntity, top: y } }><Entity name={e.name} art={e.art} /></div>;
        })}</div>;
	}
}

export = Scene;

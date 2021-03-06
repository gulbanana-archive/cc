﻿import React = require('react');
import Scene = require('./Components/Scene');
import art = require('./art');

export class Game {
	_state = { entities: [{ name: 'Game Board', art: art.noughts }] }
	_renderTarget: Element
	_intervalID: number;
	_fps: number;

	constructor(e: Element) {
		this._renderTarget = e;
	}

	_createPlayer(n: number) {
		return { name: 'Player ' + n, art: art.dude }
	}

	_update() {
		if (this._state.entities.length < 5) {
			this._state.entities.push(this._createPlayer(this._state.entities.length));
		}
	}

	_draw() {
		React.render(<Scene entities={this._state.entities} />, this._renderTarget);
	}

	start(fps: number) {
		this._fps = fps;

		var skipTicks = 1000 / this._fps;
		var maxFrameSkip = 10;
		var nextGameTick = (new Date).getTime();

		var run = () => {
			var loops = 0;

			while ((new Date).getTime() > nextGameTick && loops < maxFrameSkip) {
				this._update();
				nextGameTick += skipTicks;
				loops++;
			}

			this._draw();
		}

		this._intervalID = setInterval(run, 1000 / this._fps);
	}

	stop() {
		clearInterval(this._intervalID)
	}
}






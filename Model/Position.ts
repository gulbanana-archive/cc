export default class Position {
	left: number;
	top: number;

	constructor(_x: number, _y: number) {
		this.left = _x;
		this.top = _y;
	}

	toString() {
		return this.left + "," + this.top;
	}
};
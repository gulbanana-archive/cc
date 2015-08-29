import Game = require('./Game');

var g = new Game.Game(document.getElementById('content'));
g.start(10);

var b = document.getElementById('setfps');
var t = <HTMLInputElement>document.getElementById('fps');

b.onclick = () => {
    g.stop();
    g.start(+t.value);
}
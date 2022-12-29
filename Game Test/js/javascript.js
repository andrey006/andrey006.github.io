var js = new PointJS("2d", 1000, 500, {backgroundColor: 'black'});

// var game = js.game;
// var rect = js.game.newRectObject({
// x: -200,
// y: 333,
// w: 1800,
// h: 1,
// fillColor: 'green'

// });



// // for(i=0; i<1800; i++){
// // 	rect.turn(0.1);
// // 	rect.draw();
// // }

// // var music = wAudio.newAudio("C:/Users/LoMASTER/Desktop/Game/Chet Baker - Almost blue.mp3", 0.5);

// js.game.createLoop('game', function(){
// 	// game.clearContext();
// 	rect.turn(1);
// 	rect.draw();
// })
  
//----------------------визуальная заставка--------------------------------------------


var game = js.game;
var v = js.vector.v2d;
var key = js.keyControl;
key.initKeyControl();


var rect = js.game.newRectObject({
x: 100,
y: 100,
w: 50,
h: 50,
fillColor: 'green'
});

js.game.createLoop('game', function(){

	game.clearContext();

	if(key.isKeyDown('RIGHT'))
		rect.move(v(5, 0));
	if(key.isKeyDown('LEFT'))
		rect.move(v(-5, 0));
	if(key.isKeyDown('UP'))
		rect.move(v(0, -5));
	if(key.isKeyDown('DOWN'))
		rect.move(v(0, 5));

	if(key.isKeyDown('D'))
		rect.move(v(5, 0));
	if(key.isKeyDown('A'))
		rect.move(v(-5, 0));
	if(key.isKeyDown('W'))
		rect.move(v(0, -5));
	if(key.isKeyDown('S'))
		rect.move(v(0, 5));


	rect.draw();


})



game.setLoop('game');
game.start();
var js = new PointJS("2d", 1920, 1080, {backgroundColor: 'black'});




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

// var v = js.vector.v2d;
// var key = js.keyControl;
// key.initKeyControl();
var m = js.mouseControl;
m.initMouseControl();

var teleport = js.game.newRectObject({
x: 10,
y: 35,
w: 55,
h: 55,
fillColor: 'pink'
});

var box = js.game.newRectObject({
x: 800,
y: 350,
w: 50,
h: 50,
fillColor: 'green'
});

var box2 = js.game.newRectObject({
x: 650,
y: 310,
w: 50,
h: 50,
fillColor: 'green'
});

var rect = js.game.newRectObject({ //   11111111
x: 10,
y: 35,
w: 50,
h: 50,
fillColor: 'green'
});



//-----------------------------------------\\//Первый уровень\\//-------------------------------------------------------------


var rect2 = js.game.newRectObject({// та, что в начале самом 
x: 0,
y: 100,
w: 950,
h: 50,
fillColor: 'green'
});

var rect3 = js.game.newRectObject({ // самая верхняя
x: 0,
y: -25,
w: 2000,
h: 50,
fillColor: 'green'
});

var rect4 = js.game.newRectObject({ // самая нижняя
x: 0,
y: 635,
w: 2000,
h: 50,
fillColor: 'green'
});

var rect5 = js.game.newRectObject({ // письюнок
x: 1100,
y: 25,
w: 50,
h: 75,
fillColor: 'green'
});

var rect6 = js.game.newRectObject({ // правая стеночка
x: 1341,
y: 25,
w: 50,
h: 380,
fillColor: 'green'
});

var rect7 = js.game.newRectObject({ 
x: 1100,
y: 385,
w: 500,
h: 50,
fillColor: 'green'
});

var rect8 = js.game.newRectObject({ 
x: 1100,
y: 162,
w: 50,
h: 405,
fillColor: 'green'
});

var rect9 = js.game.newRectObject({ 
x: 900,
y: 100,
w: 50,
h: 140,
fillColor: 'green'
});

var rect10 = js.game.newRectObject({ 
x: 650,
y: 230,
w: 300,
h: 50,
fillColor: 'green'
});

var rect11 = js.game.newRectObject({ 
x: 100,
y: 380,
w: 550,
h: 50,
fillColor: 'green'
});

var rect12 = js.game.newRectObject({ 
x: 650,
y: 270,
w: 50,
h: 160,
fillColor: 'green'
});

var rect13 = js.game.newRectObject({ // левая стеночка 
x: -25,
y: 100,
w: 50,
h: 550,
fillColor: 'green'
});

var rect14 = js.game.newRectObject({ 
x: 100,
y: 520,
w: 670,
h: 50,
fillColor: 'green'
});

var rect15 = js.game.newRectObject({ 
x: 770,
y: 385,
w: 50,
h: 185,
fillColor: 'green'
});

var rect16 = js.game.newRectObject({ 
x: 770,
y: 385,
w: 330,
h: 50,
fillColor: 'green'
});

var treasure1 = js.game.newRectObject({ 
x: 820,
y: 165,
w: 50,
h: 50,
fillColor: 'orange'
});

var treasure2 = js.game.newRectObject({ 
x: 1220,
y: 335,
w: 50,
h: 50,
fillColor: 'orange'
});

var end = js.game.newRectObject({ 
x: 1230,
y: 510,
w: 55,
h: 55,
fillColor: 'pink'
});


//---------------------------------Игровые циклы----------------------------------
js.game.createLoop('0', function(){
	game.clearContext();

	box.draw();


	box.drawDynamicBox();
	box.drawStaticBox();



	if(js.mouseControl.isMousePress("LEFT")){
		game.setLoop('Telepo');
	}

});	

js.game.createLoop('Telepo', function(){
	game.clearContext();

	box2.moveTimeC(m.getMousePosition(), 10);

	box2.draw();
	teleport.draw();

	if(box2.isDynamicInside(teleport.getDynamicBox())){
		game.setLoop('1');

	}	

	box2.drawDynamicBox();
	box2.drawStaticBox();

	js.brush.drawText({ 
		   text : "Помести свой маленький зеленый квадратик в Розовый квадратик ", 
		   x : 300, 
		   y : 250, 
		   align: "left",
		   color : "red", 
		   size : 30
	});


});	

js.game.createLoop('1', function(){
	game.clearContext();

	rect.moveTimeC(m.getMousePosition(), 0);





	rect.draw();
	rect2.draw();
	rect3.draw();
	teleport.draw();
	rect4.draw();
	rect5.draw();
	rect6.draw();
	rect7.draw();
	rect8.draw();
	rect9.draw();
	rect10.draw();
	rect11.draw();
	rect12.draw();
	rect13.draw();
	rect14.draw();
	rect15.draw();
	rect16.draw();
	treasure1.draw();
	treasure2.draw();
	end.draw();



	rect.drawDynamicBox();
	// rect2.drawDynamicBox();
	rect.drawStaticBox();
	// rect2.drawStaticBox();




	if(rect.isStaticIntersect(rect2.getStaticBox()) || rect.isStaticIntersect(rect3.getStaticBox()) || rect.isStaticIntersect(rect4.getStaticBox()) || rect.isStaticIntersect(rect5.getStaticBox()) || rect.isStaticIntersect(rect6.getStaticBox()) || rect.isStaticIntersect(rect7.getStaticBox()) || rect.isStaticIntersect(rect8.getStaticBox()) || rect.isStaticIntersect(rect9.getStaticBox()) || rect.isStaticIntersect(rect10.getStaticBox()) || rect.isStaticIntersect(rect11.getStaticBox()) || rect.isStaticIntersect(rect12.getStaticBox()) || rect.isStaticIntersect(rect13.getStaticBox()) || rect.isStaticIntersect(rect14.getStaticBox()) || rect.isStaticIntersect(rect15.getStaticBox()) || rect.isStaticIntersect(rect16.getStaticBox())){
		game.stop();
		if(game.stop() != true){
			js.brush.drawText({ 
				   text : "Попробуй ещё раз", 
				   x : 150, 
				   y : 250, 
				   align: "left",
				   color : "red", 
				   size : 50
			});
		}	
	}

	if(rect.isStaticIntersect(treasure1.getStaticBox())){
		treasure1.setAlpha(0.5);
	}
	if(rect.isStaticIntersect(treasure2.getStaticBox())){
		treasure2.setAlpha(0.5);
	}


	if(rect.isDynamicInside(end.getDynamicBox())){
		game.stop();
		if(game.stop() != true){
			js.brush.drawText({ 
				   text : "Красссава", 
				   x : 300, 
				   y : 250, 
				   align: "left",
				   color : "red", 
				   size : 50
			});
		}	

	}	


});






game.setLoop('0');
game.start();
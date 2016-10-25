/* 
 * app.js, code for Trumphouse game.
 *module pattern.
 *mvc pattern.
 *"fart in the elevator" pattern.
 */


var game =(function () {

// MODEL stuff

var trump = {}; // object

var bricks =[]; // array of objects

var arena ={}; // object, entire game canvas

var whitehouse ={}; // the right side of the arena, "win" zone

function initModel () {
	console.log('in initModel');

	// init trump
	trump.dom = document.getElementById('trump')
	trump.name = trump.dom.id;
	// init arena
	arena.dom = document.getElementById('game-canvas')
	arena.name = arena.dom.id;
	var list = document.getElementsByClassName('bricks')
	//make the brick objects by creating objes, and assigning
	//the DOM elements we got from getElementsByClassName()

	for ( var i = 0; i <list.length; i++) {
		
		bricks.push(

			{
				dom: list[i],
				name: list[i].id
			} // end of object being 'pushed' into array

		); // end of push
	
	} // end of for loop

}; // end of function

// view stuff

function initView () {
	console.log('in initView');

};

// controller stuff

// stack overflow
//http://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
//
function gameloop(){
	console.log('in gameloop')

}

function initController (){
	
	console.log('in initController');
		
		animateId =setIntervel(
		function (){
			gameLoop();

		}, 100
		
		)
	
	document.onkeydown = checkKey;
	// if a key is press, run the function checkkey()


function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        console.log('up arrow pressed');
    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log('down arrow pressed');
    }
    else if (e.keyCode == '37') {
       // left arrow
       console.log('left arrow pressed');
    }
    else if (e.keyCode == '39') {
       // right arrow
       console.log('right arrow pressed');
    }

} // end of checkkeys

/**---------------------
*the main animation loop
*/

};

var animateID = null; //starts without animating


//MAin Program

function start() {
	if (animateId ===null) {}

	console.log('starting game'),


}

function stop() {
	clearInterval(animateId);
	animateId = null; //set to nothing

	console.log('stopping game');


}
/**Initialize model with DOM elements,
*Initialize Controller with keyboard commands*/
function init () {
	console.log ('in init');
	initModel();
	initView();
	initController();

	


};


return {
	trump: trump,
	bricks: bricks,
	arena: arena, 
	whitehouse: whitehouse,
	init: init,
	start: start,
	stop: stop,

};

} )();










console.log('in app.js'); //debudding line



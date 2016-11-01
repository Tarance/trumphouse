var animate =(function() {


function init() {
   console.log('in animate.init()');	

};

/**
*Move a DOM object
*/
function move( gameObj){
	console.log ('moving:' + gameObj.name);

};

/**
*check for collision between DOM objects
*/
function checkForCollision(gameObj1, gameObj2){
	console.log ('checking for collision:' + gameObj1.name + 'with:' + gameObj2.name);

	return false;

};

/**
*change the direction of movement of a DOM object
*/
function bounce (gameObj){
	console.log ('bouncing:' + gameObj.name);

};

/**
*when a destroyer
*/
function destroy(gameObj1){
	console.log('destroying with:' + gameObj1.name + 'with:' + gameObj2.name);

};

	
return{

	init: init,
	move:move,
	checkForCollision: checkForCollision,
	bounce: bounce,
	destroy: destroy
	
};

}) ();


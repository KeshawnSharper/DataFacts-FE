const game = Runner.instance_;

function tick() {
  /* do not do anything if the game is not running */
  if (game.crashed || game.paused) {

      
    return requestAnimationFrame(tick);
  }

	// Key into the 'game' object to find the necessary data
	let obstacles = 0;
	let tRex = game.tRex
	var jump = new Event('keydown');
	jump.which = jump.keyCode = 32; // 32 is the keycode for the space bar
    var duck = new Event('keypress');
	duck.which = duck.keyCode = 40; // 32 is the keycode for the space bar

    if (game.horizon.obstacles[0] && game.horizon.obstacles[0].xPos < 100){
        if (game.horizon.obstacles[0].yPos <= 50){
            document.dispatchEvent(duck); 
        }
        else{
            document.dispatchEvent(jump); 
        }
        
    }
    /// call your function here
    //     console.log(game.horizon.obstacles[0])
    //     console.log(game.horizon.obstacles[0])
        
        
   
    // var intervalId = window.setInterval(function(){
    //     /// call your function here
     
    //     document.dispatchEvent(e); 
    
    // }, 5000);



  requestAnimationFrame(tick)
}
tick()

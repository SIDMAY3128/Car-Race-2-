var gameState = 0
var form,player,game,playerCount
var database
var allPlayers

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    game = new Game()
    game.readGameState()
    game.start()
  
}

function draw(){
    background("white");

    if(playerCount === 4){
        game.updateGameState(1)
    }

    if (gameState === 1){
        game.play()
    }
 
}


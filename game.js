class Game {
    constructor(){}

    readGameState(){
        database.ref('gameState').on("value",function(data){
            gameState = data.val()
        })
    }
    updateGameState(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            console.log("HELLO")
            form.display()
        }
    }

    play(){
        form.hide()
        Player.getPlayerInfo()
        if(allPlayers !== undefined){
            for (var plr in allPlayers){
                if(plr === "player"+player.index){
                    text("HELLO",200,200)
                }else{
                    text("BYE",200,200)
                }
            }
        }
    }
}
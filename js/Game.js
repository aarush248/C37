class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value", function(data){
            gameState=data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }

    }

    play(){
        form.hide()
        textSize(36)
        text("GameStart", 130, 100)
        Player.getPlayerInfo()

        if(allPlayers!==undefined){
            var display_position = 140
            textSize(24)
            for(var plr in allPlayers){
                if(plr==="player"+ player.index){
                    fill("red")
                }
                else{
                    fill("black")
                }
                text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 140, display_position)
                display_position += 20
            }

        }
        if (keyIsDown(UP_ARROW) && player.index!==null){
            player.distance += 50
            player.update()
        }
    }

}
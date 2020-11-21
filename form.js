class Form {
    constructor(){
        this.title = createElement('h2')
        this.input = createInput('Name')
        this.button = createButton('Submit')
        this.greeting = createElement('h3')
    }
    hide(){
        this.input.hide()
        this.greeting.hide()
        this.button.hide()
        this.title.hide()
    }
 
    display(){
        this.title.html("Car Racing Game")
        this.title.position(130,0)
        this.input.position(130,160)
        this.button.position(250,200)
        
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            console.log(playerCount)
            playerCount = playerCount + 1 
            player.update()
            player.updatePlayerCount(playerCount)
            this.greeting.html("Welcome "+ player.name)
            this.greeting.position(130,160)
        })
    }

}
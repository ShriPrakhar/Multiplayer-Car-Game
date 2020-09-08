class Form{
    constructor(){
      this.title = createElement('h2')
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h3');
    }
    hide(){
      this.input.hide();
      this.button.hide();
      this.title.hide();
      this.greeting.hide();
    }
    display(){
       
        this.title.html("Car Racing Game");
        this.title.position(displayWidth/2 - 50, 0);

       

        this.input.position(displayWidth/2 - 50, displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
           this.button.hide();

            player.name = this.input.value();
            
            playerCount+=1;
            player.index = playerCount;
            player.update(name)
            player.updateCount(playerCount);
            
            this.greeting.html("Hello " + name )
            this.greeting.position(displayWidth/2 - 70, displayHeight/4)
        });
      } 
    }
var preload = function(){}

preload.prototype = {
    
    preload: function() {
       var loadingBar = this.add.sprite(160,240,"loading");
        this.load.setPreloadSprite(loadingBar);
        this.game.load.image("gameover","assets/gameover.png");
        this.game.load.image("gametitle","assets/gametitle.png");
        this.game.load.image("higher","assets/higher.png");
        this.game.load.image("lower","assets/lower.png");
        this.game.load.image("play","assets/play.png");
        this.game.load.spritesheet("number","assets/numbers.png",100,100);
    },
    create: function () {
        this.game.state.start("GameTitle");
    }
    
}
var boot = function(){}

boot.prototype = {
    
    Preload: function(){
        //loading my loading bar
        this.game.load.image("loading","assets/loading.png");
    },
    
    create: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.refresh();
        
        //starts preload state
        this.game.state.start("Preload");
        
    }
}
Slot.Preloader = function(game){
	// definicija visine i širine
	Slot.GAME_WIDTH = 640;
	Slot.GAME_HEIGHT = 960;
};
Sloat.Preloader.prototype = {
	preload: function(){
		//postavljenje i učitavanje slika
		this.stage.backgroundColor = '#B4D9E7';
		this.preloadBar = this.add.sprite((Slot.GAME_WIDTH-311)/2, (Slot.GAME_HEIGHT-27)/2, 'preloaderBar');
		this.load.setPreloadSprite(this.preloadBar);
		// slike
		this.load.image('background', 'img/background.png');
		this.load.image('floor', 'img/floor1.png');
	//	this.load.image('monster-cover', 'img/regeman.png');
		this.load.image('title', 'img/new_title.png');
		this.load.image('game-over', 'img/gameover4.png');
		this.load.image('score-bg', 'img/score-bg-new.png');
		this.load.image('button-pause', 'img/button-pause-new.png');
		// spriteovi
		this.load.spritesheet('candy', 'img/coin.png', 82, 98);
	//	this.load.spritesheet('monster-idle', 'img/monster-idle.png', 103, 131);
		this.load.spritesheet('player-idle', 'img/player-idle-pack.png', 117.875, 118);
	//	this.load.spritesheet('player-idle', 'img/player-idle-die.png', 117.875, 118);
		this.load.spritesheet('button-start', 'img/button-start-new.png', 401, 143);
		this.load.spritesheet('button-restart', 'img/button-start-new.png', 401, 143);
	},
	create: function(){
		// pokretanje main menu
		this.state.start('MainMenu');
	}
};

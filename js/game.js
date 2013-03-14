'use strict';
window.p12 = window.p12 || {};

(function(ns){
	var __game__ = function(){
		this.init();
	}
	__game__.prototype = {

		load_GameSalad:function(){

			// create iframe
			var iframe = $("<iframe></iframe>")
				.attr('src',this.game.src)
				.width('480px')
				.height('353px')
				.attr('allowtransparency','true')
				.attr('scrolling','no');

			$("<div></div>").append(iframe).appendTo($(".gameContainer"));
		},

		load_FlashGame:function(){

			$(this.game.iframe)
				.appendTo(document.body)
				.appendTo($(".gameContainer"));
			return;

			$("<iframe></iframe>")
				// .addClass('grid-100')
				.attr('src','http://www.ultimatearcade.com/pages/freegames/ultimate-doodle-man/ultimate-doodle-man.html')
				.width('480px')
				.height('353px')
				.attr('allowtransparency','true')
				.attr('scrolling','no')
				.appendTo(".gameContainer");
			// var iframe = $(this.game.iframe);
			


			// $("<div></div>").append(iframe).appendTo($(".gameContainer"));
		},

		unloadgame:function(){

			window.location.href='../';
		},

		getGame:function(){
			var title = window.localStorage['gameid'];

			//get game from game id
			this.game = ns.GameBucket.getGameByTitle(title);

			switch(this.game.platform){
				case 'gamesalad':this.load_GameSalad();break;
				case 'flash':this.load_FlashGame();break;
			}
		},

		init:function(){

			$(".backButton").click(function(){
				this.unloadgame();
			}.bind(this));

			this.getGame();

			$(".backButton").show();
			$('.gameContainer').show();
		}
	}
	ns.Game = __game__;
})(window.p12);

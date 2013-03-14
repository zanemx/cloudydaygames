'use strict';
window.p12 = window.p12 || {};

(function(ns){
	var app = function(){
		this.init();
	}
	app.prototype = {

		addGames:function(){
			
			for(var i=0; i < ns.GameBucket.games.length;i++){
				var game = ns.GameBucket.games[i];
				game.parent = this;

				//preview banner
				var title = $("<p>" + game.title + "</p>");
				
				// create preview tile
				var img = new Image();
				if (game.icon.search('http://') > -1)
					img.src = game.icon;
				else
					img.src = 'assets/icons/' + game.icon;
				
				$("<div></div>")
					.append(img)
					// .css('background-image','url(assets/icons/' + game.icon + ')')
					.append(title)
					// .css('background-repeat','no-repeat')
					// .css('background-position')
					.addClass("previewTile")
					.addClass('grid-20')
					.appendTo($(".tileContainer"))
					.click((function(g){
						return function(){
							g.parent.loadgame(g);
						};
					})(game));

				// create iframe 
				// var iframe = $("<iframe></iframe>")
				// 	.attr('src',src)
				// 	.width('480px')
				// 	.height('353px')
				// 	.attr('allowtransparency','true')
				// 	.attr('scrolling','no')
				// 	.appendTo($(".content"))
			}
		},

		loadgame:function(game){

			//redirect to game page
			var url = 'game.html';
			window.localStorage['gameid']=game.title;
			window.location.href = url;
			return;
			// create iframe
			var iframe = $("<iframe></iframe>")
				.attr('src',game.src)
				.width('480px')
				.height('353px')
				.attr('allowtransparency','true')
				.attr('scrolling','no');

			game.view = $("<div></div>").append(iframe).appendTo($(".gameContainer"));


			$(".tileContainer").fadeOut('fast',function(){
				$(".gameContainer").fadeIn('fast');
			});

			$(".backButton").show();
			this.game = game;
		},

		unloadgame:function(){

			window.location.href='../portal';
		},

		// loadGamesXML:function(){
		// 	var req = new XMLHttpRequest();
		// 	req.open("GET",'assets/games.xml',false);
		// 	req.onload = function(e){
		// 		this.xml = e.target.response;
		// 		log($(this.xml));
		// 		// log(xml);
		// 	}.bind(this);
		// 	req.send();
		// },

		init:function(){

			$(".backButton").click(function(){
				this.unloadgame();
			}.bind(this));

			if(window.location.href.search('game.html')>-1){
				//games view
				$(".backButton").show();
			}else{
				this.addGames();	
			}
			
			
		}
	}
	ns.Main = app;
})(window.p12);

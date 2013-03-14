'use strict';
window.p12 = window.p12 || {};
window.log = function(m){console.log(m);}
Function.prototype.bind = function(scope) {
  var _function = this;
  
  return function() {
    return _function.apply(scope, arguments);
  }
}


$(document).ready(function(){
	
	var app = null;
	if(window.location.href.search('game.html')>-1){
		app = new p12.Game();
	}else{
		var app = new p12.Main();
	}
	
});
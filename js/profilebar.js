'use strict';
window.cdg = window.cdg || {};

(function(ns){

	var profilebar = {

		init:function(data){
			$(".profileData").fadeIn('medium');
			$(".googleLoginButton").hide();
		},
		updateMe:function(me){
			$(".profileName").text(me.displayName);
			$(".profileImage > img").attr("src", me.image.url);
			$('.profileRep').text("Site Rep - 0");
		}
	}
	ns.ProfileBar  = profilebar;

})(window.cdg);
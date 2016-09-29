var youTubeIframeApi = "https://www.youtube.com/iframe_api";

function isLoadedScript(lib) {
    return document.querySelectorAll('[src="' + lib + '"]').length > 0
}

var onPlayerReady = function(event) {
	  event.target.stopVideo();
};

var playerOptions = {
	playerVars: {
		'controls': 1,
		'showinfo': 0,
		'rel': 0,
		'loop': 1,
		'autoplay': 0
	},
	events : {
		'onReady' : onPlayerReady
	}
};

jQuery(document).ready(function($){

	if( document.getElementById('whatIsCloudVideo') || document.getElementById('internetPresenceVideo') ) {
		if(!isLoadedScript(youTubeIframeApi)) {
			var tag = document.createElement('script');
			tag.src = youTubeIframeApi;
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		}
	}

	window.onYouTubePlayerAPIReady = function(){

		if(document.getElementById('whatIsCloudVideo')) {
			playerOptions.playerVars.playlist = 'nGJBgvNzfno';
			new YT.Player('whatIsCloudVideo', playerOptions);
		}
		if(document.getElementById('internetPresenceVideo')) {
			playerOptions.playerVars.playlist = 'Kqll2XAvOos';
			new YT.Player('internetPresenceVideo', playerOptions);
		}
	}
});
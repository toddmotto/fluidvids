/*
	FluidVids.js - Fluid and Responsive YouTube/Vimeo Videos v1.0.0
	by Todd Motto: http://www.toddmotto.com
	Latest version: https://github.com/toddmotto/Fluid-Responsive-Videos
	
	Copyright 2013 Todd Motto
	Licensed under the MIT license
	http://www.opensource.org/licenses/mit-license.php

	A raw JavaScript alternative to FitVids.js, fluid width video embeds
*/ 
(function() {
	var iframes = document.getElementsByTagName('iframe');
	
	for (var i = 0; i < iframes.length; ++i) {
		var iframe = iframes[i];
		var players = /www.youtube.com|player.vimeo.com/;
		if(iframe.src.search(players) !== -1) {
			var videoRatio = (iframe.height / iframe.width) * 100;
			
			iframe.style.position = 'absolute';
			iframe.style.top = '0';
			iframe.style.left = '0';
			iframe.width = '100%';
			iframe.height = '100%';
			
			var div = document.createElement('div');
			div.className = 'video-wrap';
			div.style.width = '100%';
			div.style.position = 'relative';
			div.style.paddingTop = videoRatio + '%';
			
			var parentNode = iframe.parentNode;
			parentNode.insertBefore(div, iframe);
			div.appendChild(iframe);
		}
	}
})();
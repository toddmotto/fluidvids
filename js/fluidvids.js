/*
	Fluid and Responsive YouTube/Vimeo Videos v1.0.0
	By Todd Motto: http://www.toddmotto.com
	Latest version: https://github.com/toddmotto/fluidvids
	
	Modified 20 June 2013 by Jayden Seric (http://jaydenseric.com) to 
	prevent original video iframe widths from being exceeded.
	
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
			var width = iframe.width;
			var height = iframe.height;
			var videoRatio = (height / width) * 100;
			
			iframe.style.position = 'absolute';
			iframe.style.top = '0';
			iframe.style.left = '0';
			iframe.width = '100%';
			iframe.height = '100%';
			
			var inner = document.createElement('div');
			inner.className = 'video-inner-wrapper';
			inner.style.width = '100%';
			inner.style.position = 'relative';
			inner.style.paddingTop = videoRatio + '%';
			
			var parentNode = iframe.parentNode;
			parentNode.insertBefore(inner, iframe);
			inner.appendChild(iframe);
			
			var outer = document.createElement('div');
			outer.className = 'video-outer-wrapper';
			outer.style.maxWidth = width + 'px';
			
			parentNode.insertBefore(outer, inner);
			outer.appendChild(inner);
		}
	}
})();

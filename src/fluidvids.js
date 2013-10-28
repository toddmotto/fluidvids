window.fluidvids = (function (window, document, undefined) {

  'use strict';

  /*
   * Constructor function
   */
  var Fluidvids = function (elem) {
    this.elem = elem;
  };

  /*
   * Prototypal setup
   */
  Fluidvids.prototype = {

    init : function () {

      var videoRatio;
      if (this.elem.height) {
        videoRatio = this.elem.height / this.elem.width * 100;
      } else {
        videoRatio = (parseInt(this.elem.offsetHeight, 10) / parseInt(this.elem.offsetWidth,10) ) * 100;
      }
      this.elem.style.position = 'absolute';
      this.elem.style.top = '0';
      this.elem.style.left = '0';
      this.elem.width = '100%';
      this.elem.height = '100%';

      var wrap = document.createElement('div');
      wrap.className = 'fluidvids';
      wrap.style.width = '100%';
      wrap.style.position = 'relative';
      wrap.style.paddingTop = videoRatio + '%';

      var thisParent = this.elem.parentNode;
      thisParent.insertBefore(wrap, this.elem);
      wrap.appendChild(this.elem);

    }

  };

  /*
   * Initiate the plugin
   */
  var iframes = document.getElementsByTagName( 'iframe' );

  for (var i = 0; i < iframes.length; i++) {
    var players = /www.youtube.com|player.vimeo.com/;
    if (iframes[i].src.search(players) > 0) {
      new Fluidvids(iframes[i]).init();
    }
  }

})(window, document);

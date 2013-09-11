/*!
 *  FluidVids.js v1.2.0
 *  Responsive and fluid YouTube/Vimeo video embeds.
 *  Project: https://github.com/toddmotto/fluidvids
 *  by Todd Motto: http://toddmotto.com
 *
 *  Copyright 2013 Todd Motto. MIT licensed.
 */
// Uses AMD or browser globals to create a module.

// If you want something that will also work in Node, see returnExports.js
// If you want to support other stricter CommonJS environments,
// or if you need to create a circular dependency, see commonJsStrict.js

// Defines a module "amdWeb" that depends another module called "b".
// Note that the name of the module is implied by the file name. It is best
// if the file name and the exported global have matching names.

// If the 'b' module also uses this type of boilerplate, then
// in the browser, it will create a global .b that is used below.

// If you do not want to support the browser global path, then you
// can remove the `root` use and the passing `this` as the first arg to
// the top function.

(function (root, factory) {
  'use strict';
  if(typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['b'], factory);
  } else {
    // Browser globals
    root.fluidvids = factory(root.b);
  }
}(this, function (window, document, undefined) {

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

      var videoRatio = (this.elem.height / this.elem.width) * 100;
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

  return Fluidvids;

}));
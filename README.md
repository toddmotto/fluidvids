# Fluidvids.js [![Build Status](https://travis-ci.org/toddmotto/fluidvids.png)](https://travis-ci.org/toddmotto/fluidvids)

Fluidvids is 1KB standalone module that provides a fluid solution for video embeds. By default Fluidvids supports YouTube and Vimeo, but you can easily add your own players. Fluidvids also provides support for dynamically injected (XHR/Ajax/createElement) videos.

## Demo
Check out a [demo of FluidVids](http://toddmotto.com/labs/fluidvids).

## Methods

#### init()
Pass in your configuration.

```javascript
fluidvids.init({
  selector: 'iframe', // runs querySelectorAll()
  players: ['www.youtube.com', 'player.vimeo.com'] // players to support
});
```

Fluidvids internally constructs a strict `Regular Expression` which obides by your players `Array`, so ensure any new videos you add are added to `players: []`. This helps avoid any unwanted videos being parsed and provides flexibility for scaling easily.

#### apply()
Provides dynamic video support. Using `apply()` should only be done when you want to requery the DOM and look for newly added videos, such as `document.createElement('iframe');`. Fluidvids uses internal object caching to lookup `init()` configuration, so it's lightning fast.

```javascript
// run after dynamic elements have been injected
// you'll need to run this each time you need it
fluidvids.apply();
```

## Installing with Bower
Use the repository hook:

```
bower install https://github.com/toddmotto/fluidvids.git
```

## Manual installation
Ensure you're using the files from the `dist` directory (contains compiled production-ready code). Ensure you place the script before the closing `</body>` tag.
	
```html
<body>
  <!-- html above -->
  <script src="dist/fluidvids.js"></script>
  <script>
  // fluidvids module available
  </script>
</body>
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using Grunt.

## Release history
- 2.2.0
  - XHR/Ajax content support via new `apply()` method to requery DOM
  - Add AMD support
- 2.1.0
  - Fix IE8 bug
- 2.0.0
  - Complete rewrite using Module pattern with public methods
  - Better ability to add custom players
  - Add a custom selector
- 1.2.0
  - Make use of Prototypes
- 1.1.0
  - Better structure
- 1.0.0
  - Initial release

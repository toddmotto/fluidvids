describe('fluidvids', function () {

  function $$ (selector) {
    return document.querySelector(selector);
  }

  describe('insertBefore fluid wrap', function () {
    beforeEach(function () {
      var test1 = document.createElement('iframe');
      test1.src = 'http://www.youtube.com/embed/JMl8cQjBfqk';
      test1.id = 'test1';
      test1.className = 'test';
      document.body.appendChild(test1);
      fluidvids.init();
    });
    it('should wrap the iframe in a fluid <div>', function () {
      var test1 = $$('#test1');
      expect(test1.src).toContain('youtube');
      expect(test1.className).toContain('fluidvids-item');
      expect(test1.parentNode.className).toBe('fluidvids');
    });
  });

  describe('players options, dynamic RegExp construction', function () {
    beforeEach(function () {
      var youtube = document.createElement('iframe');
      var vimeo = document.createElement('iframe');
      youtube.src = 'http://www.youtube.com/embed/JMl8cQjBfqk';
      youtube.id = 'test2';
      vimeo.src = 'http://player.vimeo.com/video/23919731';
      vimeo.id = 'test3';
      document.body.appendChild(youtube);
      document.body.appendChild(vimeo);
      fluidvids.init({
        players: ['www.youtube.com']
      });
    });
    it('should make YouTube fluid', function () {
      var test2 = $$('#test2');
      expect(test2.parentNode.className).toBe('fluidvids');
    });
    it('should not make Vimeo fluid', function () {
      var test3 = $$('#test3');
      expect(test3.parentNode.className).not.toBe('fluidvids');
    });
  });

  describe('intrinsic ratio', function () {
    beforeEach(function () {
      var test4 = document.createElement('iframe');
      test4.src = 'http://www.youtube.com/embed/JMl8cQjBfqk';
      test4.width = 1600;
      test4.height = 900;
      test4.id = 'test4';
      document.body.appendChild(test4);
      fluidvids.init();
    });
    it('should add padding based on aspect ratio', function () {
      var test4 = $$('#test4');
      expect(test4.parentNode.style.paddingTop).toBe('56.25%');
    });
  });

  describe('ignored or rendered fluidvids', function () {
    beforeEach(function () {
      var test5 = document.createElement('iframe');
      test5.src = 'http://www.youtube.com/embed/JMl8cQjBfqk';
      test5.setAttribute('data-fluidvids', 'loaded');
      test5.width = 1600;
      test5.height = 900;
      test5.id = 'test5';
      document.body.appendChild(test5);
      fluidvids.init();
    });
    it('should not run on elements with data-fluidvids attrs', function () {
      var test5 = $$('#test5');
      expect(test5.parentNode.className).not.toBe('fluidvids');
    });
  });

  describe('render method', function () {
    beforeEach(function () {
      var test6 = document.createElement('iframe');
      test6.src = 'http://www.youtube.com/embed/JMl8cQjBfqk';
      test6.id = 'test6';
      document.body.appendChild(test6);
      fluidvids.render();
    });
    it('should query another collection and make fluid', function () {
      var test6 = $$('#test6');
      expect(test6.parentNode.className).toBe('fluidvids');
    });
  });

});

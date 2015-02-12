System.registerModule("src/es6/scroll-watcher.js", [], function() {
  "use strict";
  var __moduleName = "src/es6/scroll-watcher.js";
  var ScrollWatcher = function ScrollWatcher() {
    var $__0 = this;
    this._locked = false;
    alert('hello');
    $(document).on('mousewheel DOMMouseScroll', (function() {
      $__0.onMouseWheel();
    }));
  };
  ($traceurRuntime.createClass)(ScrollWatcher, {onMouseWheel: function(event) {
      var $__0 = this;
      var delta = event.originalEvent.wheelDeltaY || -1 * event.originalEvent.deltaY;
      event.preventDefault();
      event.stopPropagation();
      if (this._locked) {
        return ;
      }
      this._locked = true;
      if (delta > 0) {
        this.trigger('scrollup');
      } else {
        this.trigger('scrolldown');
      }
      setTimeout((function() {
        $__0._locked = false;
      }), this.SCROLL_DURATION);
    }}, {});
  return {};
});
//# sourceURL=src/es6/scroll-watcher.js
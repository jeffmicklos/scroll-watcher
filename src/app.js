import $ from 'jquery';

var ScrollWatcher = (function(){"use strict";var PRS$0 = (function(o,t){o["__proto__"]={"a":t};return o["a"]===t})({},{});var DP$0 = Object.defineProperty;var GOPD$0 = Object.getOwnPropertyDescriptor;var MIXIN$0 = function(t,s){for(var p in s){if(s.hasOwnProperty(p)){DP$0(t,p,GOPD$0(s,p));}}return t};var proto$0={};
  function ScrollWatcher() {var this$0 = this;
    this._locked = false;

    $(document).on('mousewheel DOMMouseScroll', function()  {
      this$0.onMouseWheel();
    });

  }DP$0(ScrollWatcher,"prototype",{"configurable":false,"enumerable":false,"writable":false});

  proto$0.onMouseWheel = function(event) {var this$0 = this;
    var delta = event.originalEvent.wheelDeltaY || -1 * event.originalEvent.deltaY;

    event.preventDefault();
    event.stopPropagation();

    if(this._locked) {
      return;
    }

    this._locked = true;

    if(delta > 0) {
      this.trigger('scrollup');
    } else {
      this.trigger('scrolldown');
    }

    setTimeout(function()  {
      this$0._locked = false;
    }, this.SCROLL_DURATION);

  };

MIXIN$0(ScrollWatcher.prototype,proto$0);proto$0=void 0;return ScrollWatcher;})();
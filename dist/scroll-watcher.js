"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var $ = _interopRequire(require("jquery"));

var ScrollWatcher = (function () {
  function ScrollWatcher() {
    var _this = this;
    _classCallCheck(this, ScrollWatcher);

    this._locked = false;

    $(document).on("mousewheel DOMMouseScroll", function () {
      _this.onMouseWheel();
    });
  }

  _prototypeProperties(ScrollWatcher, null, {
    onMouseWheel: {
      value: function onMouseWheel(event) {
        var _this = this;
        var delta = event.originalEvent.wheelDeltaY || -1 * event.originalEvent.deltaY;

        event.preventDefault();
        event.stopPropagation();

        if (this._locked) {
          return;
        }

        this._locked = true;

        if (delta > 0) {
          this.trigger("scrollup");
        } else {
          this.trigger("scrolldown");
        }

        setTimeout(function () {
          _this._locked = false;
        }, this.SCROLL_DURATION);
      },
      writable: true,
      configurable: true
    }
  });

  return ScrollWatcher;
})();
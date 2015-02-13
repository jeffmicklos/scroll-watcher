define(["exports", "module", "jquery"], function (exports, module, _jquery) {
  "use strict";

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

  var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

  var $ = _interopRequire(_jquery);

  var ScrollWatcher = (function () {
    function ScrollWatcher() {
      var _this = this;
      _classCallCheck(this, ScrollWatcher);

      this._locked = false;
      this.SCROLL_DURATION = 1200;

      $(document).on("mousewheel DOMMouseScroll", function (event) {
        _this.onMouseWheel(event);
      });
    }

    _prototypeProperties(ScrollWatcher, null, {
      on: {
        value: function on(event, callback) {
          $(this).on(event, callback);
        },
        writable: true,
        configurable: true
      },
      off: {
        value: function off(event, callback) {
          $(this).off(event, callback);
        },
        writable: true,
        configurable: true
      },
      trigger: {
        value: function trigger(event) {
          $(this).trigger(event);
        },
        writable: true,
        configurable: true
      },
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

  module.exports = ScrollWatcher;
});
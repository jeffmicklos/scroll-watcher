(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.$);
    global.scrollWatcher = mod.exports;
  }
})(this, function (exports, _jquery) {
  'use strict';

  var _interopRequire = function (obj) { return obj && obj.__esModule ? obj['default'] : obj; };

  var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _$ = _interopRequire(_jquery);

  var ScrollWatcher = (function () {
    function ScrollWatcher() {
      var _this = this;

      _classCallCheck(this, ScrollWatcher);

      this._locked = false;
      this.SCROLL_DURATION = 1200;

      _$(document).on('mousewheel DOMMouseScroll', function (event) {
        _this.onMouseWheel(event);
      });
    }

    _createClass(ScrollWatcher, [{
      key: 'on',
      value: function on(event, callback) {
        _$(this).on(event, callback);
      }
    }, {
      key: 'off',
      value: function off(event, callback) {
        _$(this).off(event, callback);
      }
    }, {
      key: 'trigger',
      value: function trigger(event) {
        _$(this).trigger(event);
      }
    }, {
      key: 'onMouseWheel',
      value: function onMouseWheel(event) {
        var _this2 = this;

        var delta = event.originalEvent.wheelDeltaY || -1 * event.originalEvent.deltaY;

        event.preventDefault();
        event.stopPropagation();

        if (this._locked) {
          return;
        }

        this._locked = true;

        if (delta > 0) {
          this.trigger('scrollup');
        } else {
          this.trigger('scrolldown');
        }

        setTimeout(function () {
          _this2._locked = false;
        }, this.SCROLL_DURATION);
      }
    }]);

    return ScrollWatcher;
  })();

  exports.ScrollWatcher = ScrollWatcher;
});
import $ from 'jquery';

export class ScrollWatcher {
  constructor() {
    this._locked = false;
    this.SCROLL_DURATION = 1200

    $(document).on('mousewheel DOMMouseScroll', (event) => {
      this.onMouseWheel(event);
    });
  }

  on(event, callback) {
    $(this).on(event, callback);
  }

  off(event, callback) {
    $(this).off(event, callback);
  }

  trigger(event) {
    $(this).trigger(event);
  }

  onMouseWheel(event) {
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

    setTimeout(() => {
      this._locked = false;
    }, this.SCROLL_DURATION);

  }
}
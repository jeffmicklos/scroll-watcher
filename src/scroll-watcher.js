import $ from 'jquery';

class ScrollWatcher {
  constructor() {
    this._locked = false;

    $(document).on('mousewheel DOMMouseScroll', () => {
      this.onMouseWheel();
    });

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
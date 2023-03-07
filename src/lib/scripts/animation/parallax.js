export default class Parallax {
  constructor(options = {}) {
    this.scrollY = 0;
    this.speed = options.speed || 0.5;
    this.scrollRangeMin = options.scrollRangeMin || 0;
    this.scrollRangeMax = options.scrollRangeMax || 500;
    this.outputRange = options.outputRange || [1, 1.2];
    this.scale = options.scale !== undefined ? options.scale : false;

    this.mapRange = this.mapRange.bind(this);
    this.clamp = this.clamp.bind(this);
  }

  mapRange(value) {
    return (
      ((value - this.scrollRangeMin) *
        (this.outputRange[1] - this.outputRange[0])) /
        (this.scrollRangeMax - this.scrollRangeMin) +
      this.outputRange[0]
    );
  }

  clamp(value) {
    return Math.min(
      Math.max(value, this.outputRange[0]),
      this.outputRange[1]
    ).toFixed(4);
  }

  onScroll(scrollY) {
    this.scrollY = scrollY;
  }

  getTransform(scrollY) {
    this.onScroll(scrollY);
    let transform = `translate3d(0, ${this.scrollY * this.speed}px, 0)`;
    if (this.scale) {
      const scaledValue = this.clamp(this.mapRange(this.scrollY));
      const scale3d = `scale3d(${scaledValue}, ${scaledValue}, 1)`;
      transform += ` ${scale3d}`;
    }
    return transform;
  }
}

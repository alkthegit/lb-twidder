const defaultOperandValues = {
  x: 0.1,
  y: 0.2,
};

export default class Model {
  constructor() {
    this.x = defaultOperandValues.x;
    this.y = defaultOperandValues.y;
  }

  getX() {
    return this.x;
  }

  setX(value) {
    this.x = this.parseInputValue(value);
  }

  getY() {
    return this.y;
  }

  setY(value) {
    this.y = this.parseInputValue(value);
  }

  twid() {
    return this.x + this.y;
  }

  parseInputValue(value) {
    return +value;
  }
}

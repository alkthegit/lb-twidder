const defaultOperandValues = {
  x: 0.1,
  y: 0.2,
};

const parseInputValue = function parseInputValue(value) {
  return +value;
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
    this.x = parseInputValue(value);
  }

  getY() {
    return this.y;
  }

  setY(value) {
    this.y = parseInputValue(value);
  }

  twid() {
    return this.x + this.y;
  }
}

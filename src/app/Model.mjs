const defaultOperandValues = {
  x: 0.1,
  y: 0.2,
};

export default class Model {
  constructor() {
    this._x = defaultOperandValues.x;
    this._y = defaultOperandValues.y;
  }

  get x() {
    return this._x;
  }

  set x(value) {
    //TODO: check value
    this._x = this.parseInputValue(value);
    console.log(`new value for x: ${this._x}`);
  }

  get y() {
    return this._y;
  }

  set y(value) {
    //TODO: check value
    this._y = this.parseInputValue(value);
    console.log(`new value for y: ${this._y}`);
  }

  twid() {
    return this.x + this.y;
  }

  parseInputValue(value) {
    return +value;
  }
}

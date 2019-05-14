const operandXId = 'operandX';
const operandYId = 'operandY';
const twidButtonId = 'twidButton';
const twidFormId = 'twidForm';

export default class Controller {
  _operandX;
  _operandY;
  _twidButton;
  _twidform;
  _containerDiv;
  model;

  constructor(containerDiv, model) {
    this._containerDiv = containerDiv;
    this.model = model;

    this.twidButton.addEventListener('click', this.onTwid);
    this.operandX.addEventListener(
      'input',
      this.updateOperandValue.bind(this, this.operandX),
    );
    this.operandY.addEventListener(
      'input',
      this.updateOperandValue.bind(this, this.operandY),
    );

    this.operandX.value = this.model.getX();
    this.operandY.value = this.model.getY();
  }

  get operandX() {
    return (
      this._operandX ||
      (this._operandX = this._containerDiv.querySelector('#' + operandXId))
    );
  }

  get operandY() {
    return (
      this._operandY ||
      (this._operandY = this._containerDiv.querySelector('#' + operandYId))
    );
  }

  get twidButton() {
    return (
      this._twidButton ||
      (this._twidButton = this._containerDiv.querySelector('#' + twidButtonId))
    );
  }

  get twidForm() {
    return (
      this._twidForm ||
      (this._twidForm = this._containerDiv.querySelector('#' + twidFormId))
    );
  }

  updateOperandValue = (operand, event) => {
    const value = Number.parseFloat(event.target.value);
    if (operand.id === operandXId) {
      this.model.setX(value);
    }

    if (operand.id === operandYId) {
      this.model.setY(value);
    }
  };

  onTwid = (event) => {
    event.preventDefault();
    alert(this.model.twid());
  };
}

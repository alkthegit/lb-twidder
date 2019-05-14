const operandXId = 'operandX';
const operandYId = 'operandY';
const twidButtonId = 'twidButton';
const twidFormId = 'twidForm';

export default class Controller {
  constructor(containerDiv, model) {
    this.containerDiv = containerDiv;
    this.model = model;
  }

  initialize() {
    // ссылки на элементы управления
    this.operandXElement = this.containerDiv.querySelector(`#${operandXId}`);
    this.operandYElement = this.containerDiv.querySelector(`#${operandYId}`);

    this.twidButtonElement = this.containerDiv.querySelector(`#${twidButtonId}`);
    this.twidform = this.containerDiv.querySelector(`#${twidFormId}`);

    // перепривязка методов к правильному this (что-то типа как в компонентах React)
    this.updateOperandValue = this.updateOperandValue.bind(this);
    this.onTwid = this.onTwid.bind(this);

    this.twidButtonElement.addEventListener('click', this.onTwid);
    this.operandXElement.addEventListener(
      'input',
      this.updateOperandValue.bind(this, this.operandXElement),
    );
    this.operandYElement.addEventListener(
      'input',
      this.updateOperandValue.bind(this, this.operandYElement),
    );

    this.operandXElement.value = this.model.getX();
    this.operandYElement.value = this.model.getY();
  }

  updateOperandValue(operand, event) {
    const value = Number.parseFloat(event.target.value);
    if (operand.id === operandXId) {
      this.model.setX(value);
    }

    if (operand.id === operandYId) {
      this.model.setY(value);
    }
  }

  onTwid(event) {
    event.preventDefault();
    const sum = this.model.twid();

    // обрезаем оставшиеся справа нули
    const result = sum.toFixed(10).replace(/[0]+$/, '');

    // eslint-disable-next-line no-undef, no-alert
    alert(result);
  }
}

const operandXId = 'operandX';
const operandYId = 'operandY';
const twidButtonId = 'twidButton';
const twidFormId = 'twidForm';

export default class Controller {
  constructor(containerDiv, model) {
    this.containerDiv = containerDiv;
    this.model = model;

    // ссылки на элементы управления
    this.operandXElement = this.containerDiv.querySelector(`#${operandXId}`);
    this.operandYElement = this.containerDiv.querySelector(`#${operandYId}`);

    this.twidButtonElement = this.containerDiv.querySelector(`#${twidButtonId}`);
    this.twidform = this.containerDiv.querySelector(`#${twidFormId}`);

    // перепривязка методов к правильному this (что-то типа как в компонентах React)
    this.updateOperandValue = this.updateOperandValue.bind(this);
    this.onTwid = this.onTwid.bind(this);

    this.twidButtonElement.addEventListener('click', this.onTwid);
    this.operandXElement.addEventListener('input', this.updateOperandValue(this.operandX));
    this.operandYElement.addEventListener('input', this.updateOperandValue(this.operandY));

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
    // eslint-disable-next-line no-undef, no-alert
    alert(this.model.twid());
  }
}

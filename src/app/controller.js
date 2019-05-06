const operandXId = "operandX";
const operandYId = "operandY";
const twidButtonId = "twidButton";
const twidFormId = "twidForm";

/* export */ class TwidderController {
    _operandX;
    _operandY;
    _twidButton;
    _twidform;
    _containerDiv;
    _twidderModel;

    constructor(containerDiv, twidderModel) {
        this._containerDiv = containerDiv;
        this._twidderModel = twidderModel;

        this.twidButton.addEventListener("click", this.onTwid);
        this.operandX.addEventListener("input", this.updateOperandValue.bind(this, this.operandX));
        this.operandY.addEventListener("input", this.updateOperandValue.bind(this, this.operandY));

        this.operandX.value = this._twidderModel.x;
        this.operandY.value = this._twidderModel.y;
    }

    get operandX() {
        return this._operandX || (
            this._operandX = this._containerDiv.querySelector('#' + operandXId)
        );
    }

    get operandY() {
        return this._operandY || (
            this._operandY = this._containerDiv.querySelector('#' + operandYId)
        );

    }

    get twidButton() {
        return this._twidButton || (
            this._twidButton = this._containerDiv.querySelector('#' + twidButtonId)
        );
    }

    get twidForm() {
        return this._twidForm || (
            this._twidForm = this._containerDiv.querySelector('#' + twidFormId)
        );
    }

    updateOperandValue = (operand, event) => {
        const value = Number.parseFloat(event.target.value);
        if (operand.id === operandXId) {
            this._twidderModel.x = value;
        }

        if (operand.id === operandYId) {
            this._twidderModel.y = value;

        }
    }


    onTwid = (event) => {
        event.preventDefault();
        alert(this._twidderModel.twid());
    }


}
import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, callBack) {
        super(popupSelector);
        this._callBack = callBack;
        this._formPopup = this._popup.querySelector('.popup__form');
        this._field = this._popup.querySelector('.popup__field')
    }

    close() {
        super.close();
        this._formPopup.reset();
    }

    _getInputValues() {
        this._formValues = {};
        this._field.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBack(this._getInputsValues());
        })
    }
}
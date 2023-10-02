import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, callBack) {
        super(popupSelector);
        this._callBack = callBack;
        this._formPopup = this._popup.querySelector('.popup__form');
        this._fields = this._popup.querySelectorAll('.popup__field');
    }

    close() {
        super.close();
        this._formPopup.reset();
    }

    _getInputValues() {
        this._formValues = {};
        this._fields.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBack(this._getInputValues());
        })
    }
}
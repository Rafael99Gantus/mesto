import Popup from "./Popup.js";

export default class PopupWithAvatar extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._popupSelector = document.querySelector(popupSelector);
    }

    _getInputValues() {
        this._formValues = {};
        this._fields.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBack(this._getInputValues());
        })
    }
}
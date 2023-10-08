import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup{
    constructor(popupSelector){
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('#buttonAnswer');
    }
}
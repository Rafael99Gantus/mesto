import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup{
    constructor(popupSelector, handleDeleteCard){
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._submitButton = this._form.querySelector('#buttonAnswer');
        this._handleDeleteCard = handleDeleteCard;
    }

    _handleDelete(){
        this._handleDeleteCard(this._id)
    }

    _setEventListeners(){
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleDelete();
        })
    }
}
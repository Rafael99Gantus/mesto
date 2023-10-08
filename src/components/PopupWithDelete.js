import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup{
    constructor(popupSelector, handleDeleteCard){
        super(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._handleDeleteCard = handleDeleteCard;
    }

    close(){
        super.close();
    }

    open(){
        super.open(el);
        this._el = el;
    }

    _setEventListeners(){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleDeleteCard(this._el);
        })
    }
}
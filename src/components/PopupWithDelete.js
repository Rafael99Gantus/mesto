import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup{
    constructor(popupSelector, {handleDeleteCard}){
        super(popupSelector);
        this._form = this._popup.querySelector('#deleteForm');
        this._handleDeleteCard = handleDeleteCard;
        // this._getAllCardsId = getAllCardsId;
    }

    set(card){
        super.open();
        this._card = card
    }

    _setEventListeners(){
        this._trashIcon = document.querySelector('.elements__trash')
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleDeleteCard(this._card);
            // this.close()
        })

        // this._trashIcon.addEventListener('click', () => {
        //     this._handleTrashButton();
        // });

    }

//     //Открытие попапа ANSWER
//   _handleTrashButton() {
//     this._popup.classList.add('popup_opened');
//   }
}
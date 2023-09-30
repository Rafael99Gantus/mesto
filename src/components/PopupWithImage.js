import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.popupSelector = document.querySelector(popupSelector)
    this._popupImage = document.querySelector('.popup__image');
    this._popupTitle = document.querySelector('.popup__titleImage')
  }
  open(link, name) {
    super.open()
    this._popupImage.src = name;
    this._popupImage.alt = link;
    this._popupTitle.textContent = link;
  }

}
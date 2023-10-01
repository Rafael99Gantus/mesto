import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = document.querySelector('.popup__image');
    this._popupTitle = document.querySelector('.popup__titleImage')
  }
  open(name, link) {
    super.open()
    this._popupImage.src = name;
    this._popupImage.alt = link;
    this._popupTitle.textContent = link;
  }

}
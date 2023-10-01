import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupTitle = this._popup.querySelector('.popup__titleImage')
  }
  open(name, link) {
    super.open()
    this._popupImage.src = name;
    this._popupImage.alt = link;
    this._popupTitle.textContent = link;
  }

}
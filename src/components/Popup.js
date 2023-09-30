export default class Popup{
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    this._popup__closed = this._popup.querySelector('.popup__closed');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open(){
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', () => {
      this._handleEscClose();
    });
  }

  close(){
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', () => {
      this._handleEscClose();
    });
  }

  _handleEscClose(evt){ // Закрытие нажатием на Escape
    if (evt.key === 'Escape') {
      close();
    };
  }

  _closePopupByOverlay(evt) { // Закрытие нажатием на Оверлей
    if (evt.currentTarget === evt.target) {
      close()
    }
  }

  setEventListeners(){
    this._popup__closed.addEventListener("click", () => {
      close();
    });
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.currentTarget === evt.target) {
        close(evt.currentTarget)
      }
    })
  }
}
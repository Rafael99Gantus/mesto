export class Popup{
    constructor(popupSelector){
      this._popupSelector = document.querySelector(popupSelector);
    }
  
    open(){
      this._popupSelector.classList.add('popup_opened');
      document.addEventListener('keydown', () => {
        this._handleEscClose();
      });
    }
  
    close(){
      this._popupSelector.classList.remove('popup_opened');
      document.removeEventListener('keydown', () => {
        this._handleEscClose();
      });
    }
  
    _handleEscClose(evt){ // Закрытие нажатием на Оверлей
      if (evt.key === 'Escape') {
        close(document.querySelector('.popup_opened'));
      };
    }
  
    _closePopupByOverlay(evt) { // Закрытие нажатием на Escape
      if (evt.currentTarget === evt.target) {
        close(evt.currentTarget)
      }
    }
  
    setEventListeners(){
      closedIconPopupImage.addEventListener("click", () => {
        close();
      });
      popupCardsClosedIcon.addEventListener("click", () => {
        close();
      });
      this._popupSelector.addEventListener('mousedown', (evt) => {
        if (evt.currentTarget === evt.target) {
          close(evt.currentTarget)
        }
      })
    }
  }
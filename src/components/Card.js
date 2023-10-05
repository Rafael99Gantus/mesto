export class Card{
  constructor(data, templateSelector, handleOpenPopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleOpenPopup = handleOpenPopup;
  }

  _getTemplate() {
    const card = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
    return card;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeIcon = this._element.querySelector('#first-heart');
    this._trashIcon = this._element.querySelector('.elements__trash');
    this._imageCard = this._element.querySelector('.elements__image');
    this._nameCard = this._element.querySelector('.elements__name');
    this._popupImage = document.querySelector('.popup__image');
    this._popupTitle = document.querySelector('.popup__titleImage')
    this._setEventListeners();

    this._nameCard.textContent = this._name;
    const cardImage = this._imageCard;
    cardImage.src = this._link;
    cardImage.alt = this._name;
    return this._element;
  }

  _setEventListeners() {
    this._likeIcon.addEventListener('click', () => {
      this._handleLike();
    });

    this._trashIcon.addEventListener('click', () => {
      this._handleTrashButton();
    });

    this._imageCard.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
    });


  }
// Лайк
  _handleLike() {
    this._likeIcon.classList.toggle('elements__heart_active');
  }

//Добавление +1 к количеству лайков
  _counterLike(){
    
  }
//Удаление карточки
  _handleTrashButton() {
  this._element.remove();
  }
}
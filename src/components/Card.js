export class Card{
  constructor(data, container, handleOpenPopup, numberlike) {
    this._name = data.name;
    this._link = data.link;
    this._handleOpenPopup = handleOpenPopup;
    this._numberlike = numberlike;
    this._id = data._id;
    this._handleDeleteCard = handleDeleteCard;
    this._container = document.querySelector(container);
  }

  _getTemplate() {
    const card = document.querySelector(this._container).content.querySelector('.elements__element').cloneNode(true);
    return card;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._likeIcon = this._element.querySelector('#first-heart');
    this._trashIcon = this._element.querySelector('.elements__trash');
    this._trashButton = document.querySelector('#buttonAnswer');
    this._trashPopup = document.querySelector('#answerPopup');
    this._imageCard = this._element.querySelector('.elements__image');
    this._nameCard = this._element.querySelector('.elements__name');
    this._popupImage = document.querySelector('.popup__image');
    this._popupTitle = document.querySelector('.popup__titleImage');
    this._numberLikes = document.querySelector('.elements__number');
    this._setEventListeners();

    
    this._nameCard.textContent = this._name;
    const cardImage = this._imageCard;
    cardImage.src = this._link;
    cardImage.alt = this._name;
    return this._element;
  }

  _setEventListeners() {
    const deleteCard = this._newCard.querySelector('#buttonAnswer')
    deleteCard.addEventListener('click', () => {this._handleDelete();});

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
    // this._numberlike(this._numberLikes);
  }

//Добавление +1 к количеству лайков
  _counterLike(){
    
  }
//Открытие попапа ANSWER
  _handleTrashButton() {
    this._trashPopup.classList.add('popup_opened');
  }

  //Удаление карточки
  _handleDelete(){
    this._handleDeleteCard(this._id)
  }
}
// Спринт 7
import {openPopup} from './index.js';
const popupImage = document.querySelector('.popup__image');
const popupTitle = document.querySelector('.popup__titleImage');


export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
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
    this._button = document.querySelector('.popup__button')
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
      this._handleImageClick();
    });

    // this._button.addEventListener('click', () => {
    //   this._handleCardFormSubmit();
    // });
  }
// Лайк
  _handleLike() {
    this._likeIcon.classList.toggle('elements__heart_active');
  }
//Удаление карточки
 _handleTrashButton() {
  this._element.remove();
  }
//Открытие попапа изображения на cardImage
  _handleImageClick() {
    openPopup(imagePopup);
    popupImage.src = this._imageCard.src
    const elementsName = this._nameCard;

    popupTitle.textContent = elementsName.textContent;
    popupImage.alt = elementsName.textContent;
  }
// //Функция добавления новой карточки
//   _handleCardFormSubmit(){
//     const cardsName = document.querySelector('#fieldNamePopupCards');//Первое поле 
//     const linkImage = document.querySelector('#fieldLinkPopupCards');//Второе поле
//     _createCard({name: cardsName.value, link: linkImage.value});
//     formEditCards.reset();
//     closePopup(popupCardsEdit);
//     editCardFormValidator._clearField();
//   }

//   _createCard(item){
//     const card = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);
//     imageCard = card.querySelector('.elements__image');
//     nameCard = card.querySelector('.elements__name');

//     imageCard.src = item.link;
//     imageCard.alt = item.link;
//     nameCard.textContent = item.name;
//     return card;
//   }
}


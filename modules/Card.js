// Спринт 7
import {openPopup} from './index.js';
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
    this._setEventListeners();

    this._element.querySelector('.elements__name').textContent = this._name;
    const cardImage = this._element.querySelector('.elements__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;
    return this._element;
  }

  // createCard (name, link) { 
  //   const template = document.querySelector('#user').content; 
  //   const card = template.querySelector('.elements__element').cloneNode(true); 
  //   card.querySelector('.elements__name').textContent = name; 
  //   const cardImage = card.querySelector('.elements__image'); 
  //   cardImage.src = link; 
  //   cardImage.alt = name;
  // }

  _setEventListeners() {
    this._element.querySelector('#first-heart').addEventListener('click', () => {
      this._generateLike();
    });

    this._element.querySelector('.elements__trash').addEventListener('click', () => {
      this._generateTrash();
    });

    this._element.querySelector('.elements__image').addEventListener('click', () => {
      this._generatePopup();
    });
  }
// Лайк
  _generateLike() {
    this._element.querySelector('#first-heart').classList.toggle('elements__heart_active');
  }
//Удаление карточки
  _generateTrash() {
    this._element.querySelector('.elements__trash').parentElement.remove();
  }
//Открытие попапа изображения на cardImage
  _generatePopup() {
    openPopup(imagePopup);
    document.querySelector('.popup__image').src = this._element.querySelector('.elements__image').src
    const elementsName = this._element.querySelector('.elements__name');
    const popupTitle = document.querySelector('.popup__titleImage');

    popupTitle.textContent = elementsName.textContent;
    document.querySelector('.popup__image').alt = elementsName.textContent;
  }
}


// import userInfoFromServObject from '../pages/index.js';

const arkhyz = new URL('../images/arkhyz.jpg', import.meta.url);
const chelyabinskOblast = new URL('../images/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovo = new URL('../images/ivanovo.jpg', import.meta.url);
const kamchatka = new URL('../images/kamchatka.jpg', import.meta.url);
const kholmogorskyRayon = new URL('../images/kholmogorsky-rayon.jpg', import.meta.url);
const baikal = new URL('../images/baikal.jpg', import.meta.url);

export const initialCards = [
  {
    name: 'Архыз',
    link: arkhyz
  },
  {
    name: 'Челябинская область',
    link: chelyabinskOblast
  },
  {
    name: 'Иваново',
    link: ivanovo
  },
  {
    name: 'Камчатка',
    link: kamchatka
  },
  {
    name: 'Холмогорский район',
    link: kholmogorskyRayon
  },
  {
    name: 'Байкал',
    link: baikal
  }
];

export const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  fieldErrorClass: 'popup__field_type_error',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const elForInfo = {
  name: '.profile__name', 
  work: '.profile__activity' 
}

export const profileNameInput = document.querySelector('#fieldNamePopupProfile');
export const profileJobInput = document.querySelector('#fieldWorkPopupProfile');
export const popupProfileOpenIcon = document.querySelector('#openIconPopupProfile');//Кнопка "Открыть попап"
export const popupCardsEdit = '#editCardsPopup';//Попап редактирования карточек
export const popupProfile = '#editProfilePopup';// ID Попапa изменения профиля
export const popupProfileClosedIcon = document.querySelector('#closedIconPopupProfile');// ID Кнопка "Закрыть попап"
export const popupCardsOpenIcon = document.querySelector('#openIconPopupCards');//Кнопка "Открыть попап"
export const cardsContainer = '.elements';
export const profileName = document.querySelector('.profile__name');
export const profileWork = document.querySelector('.profile__activity');
export const profileImg = document.querySelector('.profile__avatar');
import './pages/index.css';
import { initialCards } from './utils/constants.js';
import {Card} from './components/Card.js';
import {FormValidator} from './components/FormValidator.js';
import Section from './components/Section.js';
import PopupWithImage from './components/PopupWithImage.js';
import PopupWithForm from './components/PopupWithForm.js';
import UserInfo from './components/UserInfo.js';
import Popup from './components/Popup.js';

//Переменные

const config = {
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  fieldErrorClass: 'popup__field_type_error',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//Profile
const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');
const popupProfileOpenIcon = document.querySelector('#openIconPopupProfile');//Кнопка "Открыть попап"

//PopupProfile
const popupCardsEdit = '#editCardsPopup';//Попап редактирования карточек
const popupProfile = '#editProfilePopup';// ID Попапa изменения профиля
const popupProfileClosedIcon = document.querySelector('#closedIconPopupProfile');// ID Кнопка "Закрыть попап"
const formProfile = document.forms["fullname"];// Form
const fullName = document.querySelector('#fieldNamePopupProfile');//Первое поле 
const work = document.querySelector('#fieldWorkPopupProfile');//Второе поле

const userInfo = new UserInfo (fullName.value, work.value);

const classSection = new Section ({ data: initialCards, renderer: (item) =>{
  const card = new Card(item, '#user');
  return card.generateCard();
}, handleOpenPopup} , cardsContainer);

const profileFormValidator = new FormValidator(popupProfile, config);
profileFormValidator.enableValidation();

const editCardFormValidator = new FormValidator(popupCardsEdit, config);
editCardFormValidator.enableValidation();

const classOpenPopupImage = new PopupWithImage('.popup_photo')

const popupWithForm = new PopupWithForm (popupProfile, handleProfileFormSubmit)

//Загрузка карточек
initialCards.forEach((() => {
  classSection.renderItems()
}));

function openPopup(popup) {
  const classPopup = new Popup(popup);
  classPopup.open();
  // document.addEventListener('keydown', handleEscape );
  // // Слушатель закрытия попапа кликом на оверлей
  // popup.addEventListener("click", closePopupByOverlay);
}
function closePopup(popup) {
  const classPopup = new Popup(popup);
  classPopup.close();
  // document.removeEventListener('keydown', handleEscape );
  // // Слушатель закрытия попапа кликом на оверлей
  // popup.removeEventListener("click", closePopupByOverlay);
}

function closePopupByOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget)
  }
}
// Перенос полей
function handleProfileFormSubmit (event) {
  event.preventDefault();
  const nameValue = fullName.value;
  profileName.textContent = nameValue;

  const workValue = work.value;
  profileActivity.textContent = workValue;
  closePopup(popupProfile);
};

// Вызовы
popupProfileOpenIcon.addEventListener("click", function () {
  // fullName.value = profileName.textContent;
  // work.value = profileActivity.textContent;
  openPopup(popupProfile);
  const getUserInfo = userInfo.getUserInfo();
  getUserInfo.name = profileName.textContent;
  getUserInfo.work = profileActivity.textContent;
});
popupProfileClosedIcon.addEventListener("click", function () {
  closePopup(popupProfile);
});
formProfile.addEventListener("submit", handleProfileFormSubmit);



//Спринт 5

//Переменные
//Profile
const popupCardsOpenIcon = document.querySelector('#openIconPopupCards');//Кнопка "Открыть попап"

//Elements
const cardsContainer = document.querySelector('.elements');


//PopupCards

const popupCardsClosedIcon = document.querySelector('#closedIconPopupCards');//Кнопка "Закрыть попап"
const cardsName = document.querySelector('#fieldNamePopupCards');//Первое поле imagePopuppopupImage
const linkImage = document.querySelector('#fieldLinkPopupCards');//Второе поле
const closedIconPopupImage = document.querySelector('#closedIconPopupImage');

//Добавление карточки
const formEditCards = document.querySelector('#cardsEdit')
formEditCards.addEventListener('submit', function (event) {
  event.preventDefault(); 
  const cardElement = new Section ({ data: {name: cardsName.value, link: linkImage.value}, renderer: (item) =>{
    const card = new Card(item, '#user');
    return card.generateCard();
  }, handleOpenPopup} , cardsContainer);
  cardElement.renderItems();
  // addCard(cardElement);
  formEditCards.reset()
  closePopup(popupCardsEdit);
  editCardFormValidator.disableButton();
});

closedIconPopupImage.addEventListener("click", function () {
  closePopup(imagePopup);
});

popupCardsOpenIcon.addEventListener("click", function () {
  openPopup(popupCardsEdit);
});
popupCardsClosedIcon.addEventListener("click", function () {
  closePopup(popupCardsEdit);
});


//Спринт 6
// Функция закрытия попапов на esc
function handleEscape (evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
};

// Открытие попапа изображения

function handleOpenPopup(name, link) {
  classOpenPopupImage.open(name, link);
}

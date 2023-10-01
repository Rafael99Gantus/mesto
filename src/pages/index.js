import './index.css';
import { initialCards } from '../utils/constants.js';
import {Card} from '../components/Card.js';
import {FormValidator} from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Popup from '../components/Popup.js';

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

const imagePopup = document.querySelector('#imagePopup');

//PopupProfile
const popupCardsEdit = '#editCardsPopup';//Попап редактирования карточек
const popupProfile = '#editProfilePopup';// ID Попапa изменения профиля
const popupProfileClosedIcon = document.querySelector('#closedIconPopupProfile');// ID Кнопка "Закрыть попап"
const formProfile = document.forms["fullname"];// Form
// const fullName = '#fieldNamePopupProfile';// ID Первое поле 
// const work = ;// ID Второе поле
export const elForInfo = {
  profileNameSelector: '#fieldNamePopupProfile',
  profileJobSelector: '#fieldWorkPopupProfile'
}

//Elements
const cardsContainer = '.elements';

const userInfo = new UserInfo (elForInfo);

const section = new Section ({ data: initialCards, renderer: (item) =>{
  createCard(item)
}, handleOpenPopup} , cardsContainer);

const profileFormValidator = new FormValidator(popupProfile, config);
profileFormValidator.enableValidation();

const editCardFormValidator = new FormValidator(popupCardsEdit, config);
editCardFormValidator.enableValidation();

const popupFullImage = new PopupWithImage('#imagePopup');

const popupFormProfile = new PopupWithForm (popupProfile, handleProfileFormSubmit);
const popupFormEdit = new PopupWithForm (popupCardsEdit, handleProfileFormSubmit);
const popupFormImg = new PopupWithForm (imagePopup, handleProfileFormSubmit);


function createCard(item){
  const card = new Card(item, '#user');
  const cardEl = card.generateCard();
  section.addItem(cardEl);
}

//Загрузка карточек
initialCards.forEach(((item) => {
  createCard(item);
}));


// function closePopupByOverlay(evt) {
//   if (evt.currentTarget === evt.target) {
//     closePopup(evt.currentTarget)
//   }
// }

// Перенос полей
// function handleProfileFormSubmit (event) {
//   event.preventDefault();
//   const nameValue = fullName.value;
//   profileName.textContent = nameValue;

//   const workValue = work.value;
//   profileActivity.textContent = workValue;
//   closePopup(popupProfile);
// };

const imageCard = document.querySelector('.elements__image');
const nameCard = document.querySelector('.elements__name');

function handleProfileFormSubmit (formValues) {
  userInfo.setUIserInfo({name: formValues.imageCard, work: formValues.nameCard});
  popupProfile.close();
}

// Вызовы
popupProfileOpenIcon.addEventListener("click", function () {
  // fullName.value = profileName.textContent;
  // work.value = profileActivity.textContent;
  // openPopup(popupProfile);
  popupFormProfile.open();
  const getUserInfo = userInfo.getUserInfo();
  // getUserInfo.name = profileName.textContent;
  profileName.textContent = getUserInfo.name;
  // getUserInfo.work = profileActivity.textContent;
  profileActivity.textContent = getUserInfo.work;
});
popupProfileClosedIcon.addEventListener("click", function () {
  // closePopup(popupProfile);
  popupFormProfile.close();
});
formProfile.addEventListener("submit", handleProfileFormSubmit);

//Переменные
//Profile
const popupCardsOpenIcon = document.querySelector('#openIconPopupCards');//Кнопка "Открыть попап"




//PopupCards

const popupCardsClosedIcon = document.querySelector('#closedIconPopupCards');//Кнопка "Закрыть попап"
const cardsName = document.querySelector('#fieldNamePopupCards');//Первое поле imagePopuppopupImage
const linkImage = document.querySelector('#fieldLinkPopupCards');//Второе поле
const closedIconPopupImage = document.querySelector('#closedIconPopupImage');

//Добавление карточки
const formEditCards = document.querySelector('#cardsEdit')
formEditCards.addEventListener('submit', function (event) {
  event.preventDefault(); 
  // const cardElement = new Section ({ data: {name: cardsName.value, link: linkImage.value}, renderer: (item) =>{
  //   const card = new Card(item, '#user');
  //   return card.generateCard();
  // }, handleOpenPopup} , cardsContainer);
  // cardElement.renderItems();
  const popupCard = new PopupWithForm(formEditCards, formValues => {
    section.addItem(section.renderer(formValues));
    popupCard.close();
})
  // addCard(cardElement);
  formEditCards.reset()
  // closePopup(popupCardsEdit);
  popupFormEdit.close();
  editCardFormValidator.disableButton();
});

closedIconPopupImage.addEventListener("click", function () {
  // closePopup(imagePopup);
  popupFormImg.close()
});

popupCardsOpenIcon.addEventListener("click", function () {
  // openPopup(popupCardsEdit);
  popupFormEdit.open();
  editCardFormValidator.disableButton();
});
popupCardsClosedIcon.addEventListener("click", function () {
  // closePopup(popupCardsEdit);
  popupFormEdit.close();
});

// Открытие попапа изображения

function handleOpenPopup(name, link) {
  popupFullImage.open(name, link);
}

popupFormProfile.setEventListeners();
popupFormEdit.setEventListeners();
popupFormImg.setEventListeners();
popupFullImage.setEventListeners();
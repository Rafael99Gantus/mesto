import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

//Спринт 4

//Переменные
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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
const popupProfile = document.querySelector('#editProfilePopup');// Попап изменения профиля
const popupProfileClosedIcon = document.querySelector('#closedIconPopupProfile');//Кнопка "Закрыть попап"
const formProfile = document.forms["fullname"];// Form
const fullName = document.querySelector('#fieldNamePopupProfile');//Первое поле 
const work = document.querySelector('#fieldWorkPopupProfile');//Второе поле
const buttonSaveProfile = document.querySelector('#buttonSaveProfile');//Кнопка "Сохранить"

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape );
  // Слушатель закрытия попапа кликом на оверлей
  popup.addEventListener("click", closePopupByOverlay);
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape );
  // Слушатель закрытия попапа кликом на оверлей
  popup.removeEventListener("click", closePopupByOverlay);
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
  fullName.value = profileName.textContent;
  work.value = profileActivity.textContent;
  openPopup(popupProfile);
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
const popupCardsEdit = document.querySelector('#editCardsPopup');//Попап редактирования карточек
const popupCardsClosedIcon = document.querySelector('#closedIconPopupCards');//Кнопка "Закрыть попап"
const formCards = document.querySelector('#cardsEdit');// Form

const buttonSaveCards = document.querySelector('#buttonSaveCards');//Кнопка "Сохранить"


const elementsImage = document.querySelector('.elements__image');
const popupImage = document.querySelector('.popup__image');

const closedIconPopupImage = document.querySelector('#closedIconPopupImage');

//Функция добавления карточки на страницу
function addCard(card) {
  cardsContainer.prepend(card);
}

//Добавление карточки
const formEditCards = document.querySelector('#cardsEdit')
// function createCard(name, link){
//   const template = document.querySelector('#user').content; 
//   const card = template.querySelector('.elements__element').cloneNode(true); 
//   card.querySelector('.elements__name').textContent = name; 
//   const cardImage = card.querySelector('.elements__image'); 
//   cardImage.src = link; 
//   cardImage.alt = name;
//   return card;
// }
formEditCards.addEventListener('submit', function (event) {
  event.preventDefault(); 
  const cardsName = document.querySelector('#fieldNamePopupCards');//Первое поле 
  const linkImage = document.querySelector('#fieldLinkPopupCards');//Второе поле
  // const card = createCard(cardsName.value, linkImage.value); 
  // addCard(card);

  // const card = createCard();
  // addCard(card);
  const card = new Card({name: cardsName.value, link: linkImage.value}, '#user');
  const cardElement = card.generateCard();
  addCard(cardElement);
  formEditCards.reset()
  closePopup(popupCardsEdit);
  editCardFormValidator._clearField();
});

// // //Фугкция добавления новой карточки
// function handleCardFormSubmit(event){
//   event.preventDefault();
//   const card = new Card( , '#user')
//   formEditCards.reset();
//   closePopup(popupCardsEdit);
//   editCardFormValidator._clearField();
// }

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

// // Спринт 7



//Загрузка карточек
initialCards.forEach((function (item) {
  const createCard  = new Card(item, '#user');
  const cardElement = createCard.generateCard();
  addCard(cardElement);
}));



const profileFormValidator = new FormValidator(popupProfile, config);
profileFormValidator.enableValidation();

const editCardFormValidator = new FormValidator(popupCardsEdit, config);
editCardFormValidator.enableValidation();
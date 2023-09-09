import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
alert('Здравствуйте, прошу прощения, не запушил актуальную версию проекта, спасибо')
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
const formProfile = document.querySelector('#fullname');// Form
const fullName = document.querySelector('#fieldNamePopupProfile');//Первое поле 
const work = document.querySelector('#fieldWorkPopupProfile');//Второе поле
const buttonSaveProfile = document.querySelector('#buttonSaveProfile');//Кнопка "Сохранить"

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler);
  // Слушатель закрытия попапа кликом на оверлей
  popup.addEventListener("click", closePopupByOverlay);
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
  // Слушатель закрытия попапа кликом на оверлей
  popup.removeEventListener("click", closePopupByOverlay);
}

function closePopupByOverlay(evt) {
  if (evt.currentTarget === evt.target) {
    closePopup(evt.currentTarget)
  }
}
// Перенос полей

function valueTransferProfile(event) {
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
formProfile.addEventListener("submit", valueTransferProfile);



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
const cardsName = document.querySelector('#fieldNamePopupCards');//Первое поле 
const linkImage = document.querySelector('#fieldLinkPopupCards');//Второе поле
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


formEditCards.addEventListener('submit', function () {
  event.preventDefault();
  const artist = document.querySelector('#fieldNamePopupCards');
  const link = document.querySelector('#fieldLinkPopupCards');
  const card = createCard(artist.value, link.value);
  addCard(card);
  // const card = new Card(item, '#user');
  // const cardElement = card.createCard();
  // addCard(cardElement);
  console.log('Hello');
  formEditCards.reset()
  closePopup(popupCardsEdit);
  changeEditForm(false);
  disableButton(submitButton, config);
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
function keyHandler(evt) {
  if (evt.key === 'Escape') {
    closePopup(document.querySelector('.popup_opened'));
  };
};

// // Спринт 7



//Загрузка карточек
initialCards.forEach((function (item) {
  const card = new Card(item, '#user');
  const cardElement = card.generateCard();
  addCard(cardElement);
}));



const validName = new FormValidator(popupProfile, config);
validName.enableValidation();

const validEditCard = new FormValidator(popupCardsEdit, config);
validEditCard.enableValidation();

const createCard = (item) => {
  const card = new Card(item, '#user');
  return card.generateCard();
}
//ВАЛИДАЦИЯ

//Спринт 6
// formProfile - первая форма
// fullName - первое поле
// work - второе поле

// const isValid = (formElement, inputElement, config) => {
//   if (!inputElement.validity.valid) {
//     showInputError(formElement, inputElement, inputElement.validationMessage, config);
//   } else {
//     hideInputError(formElement, inputElement, config);
//   }
// };

// const showInputError = (formElement, inputElement, errorMessage, config) => {
//   // Находим элемент ошибки внутри самой функции
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   // Остальной код такой же
//   inputElement.classList.add(config.fieldErrorClass);
//   errorElement.textContent = errorMessage;
//   errorElement.classList.add(config.inputErrorClass);
// };

// const hideInputError = (formElement, inputElement, config) => {
//   // Находим элемент ошибки
//   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
//   // Остальной код такой же
//   inputElement.classList.remove(config.fieldErrorClass);
//   errorElement.classList.remove(config.inputErrorClass);
//   errorElement.textContent = '';
// };

// const setEventListeners = (formElement, config) => {
//   // Находим все поля внутри формы,
//   // сделаем из них массив методом Array.from
//   const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
//   const submitButton = Array.from(formElement.querySelectorAll(config.submitButtonSelector));
//   // Обойдём все элементы полученной коллекции
//   inputList.forEach((inputElement) => {
//     // каждому полю добавим обработчик события input
//     inputElement.addEventListener('input', () => {
//       // Внутри колбэка вызовем isValid,
//       // передав ей форму и проверяемый элемент
//       isValid(formElement, inputElement, config)
//       toggleButtonState(submitButton, inputList, config);
//     });
//   });
// };



// const enableValidation = config => {
//   const formList = document.querySelectorAll(config.formSelector);
//   formList.forEach((formElement) => {
//     setEventListeners(formElement, config);
//   })
// }




// const enableValidation = config => {
//   const formList = document.querySelectorAll(config.formSelector);
//   formList.forEach((formElement) => {
//     const valid = new FormValidator(config, formElement);
//     valid.setEventListeners(formElement, config);
//   })
// }

// // Блокировка кнопки сабмит
// const hasInvalidInput = (inputList) => {
//   // проходим по этому массиву методом some
//   return inputList.some((inputElement) => {
//     // Если поле не валидно, колбэк вернёт true
//     // Обход массива прекратится и вся функция
//     // hasInvalidInput вернёт true

//     return !inputElement.validity.valid;
//   })
// };

// export function toggleButtonState(submitButton, inputList, config) {
//   if (hasInvalidInput(inputList)) {
//     disableButton(submitButton, config);
//   }
//   else {
//     enableButton(submitButton, config);
//   }
// }

// function disableButton(submitButton, config) {
//   //submitButton.setAttribute('disabled', '');
//   submitButton.classList.add(config.inactiveButtonClass);
//   submitButton.disabled = true;
// }

// function enableButton(submitButton, config) {
//   //submitButton.removeAttribute('disabled');
//   submitButton.classList.remove(config.inactiveButtonClass);
//   submitButton.disabled = false;
// }


import './pages/index.css';
import {Card} from './components/Card.js';
import {FormValidator} from './components/FormValidator.js';
// import Section from './components/Section.js';
// import {PopupWithImage} from './components/PopupWithImage.js';
// import {Popup} from './components/Popup.js';

class Section{
  constructor({data, renderer}, containerSelector){
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
    this._renderer = renderer;
  }

  addItem(element){
    this._container.append(element);
  }
  
  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }
}

class Popup{
  constructor(popupSelector){
    this._popupSelector = document.getElementById(popupSelector);
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
//Спринт 4
const arkhyz = new URL('./images/arkhyz.jpg', import.meta.url);
const chelyabinskOblast = new URL('./images/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovo = new URL('./images/ivanovo.jpg', import.meta.url);
const kamchatka = new URL('./images/kamchatka.jpg', import.meta.url);
const kholmogorskyRayon = new URL('./images/kholmogorsky-rayon.jpg', import.meta.url);
const baikal = new URL('./images/baikal.jpg', import.meta.url);

//Переменные
const initialCards = [
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

export function openPopup(popup) {
  const classPopup = new Popup(popup);
  classPopup.open();
  // popup.classList.add('popup_opened');
  // document.addEventListener('keydown', handleEscape );
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
const cardsName = document.querySelector('#fieldNamePopupCards');//Первое поле 
const linkImage = document.querySelector('#fieldLinkPopupCards');//Второе поле
const closedIconPopupImage = document.querySelector('#closedIconPopupImage');

//Функция добавления карточки на страницу
function addCard(card) {
  cardsContainer.prepend(card);
}

//Добавление карточки
const formEditCards = document.querySelector('#cardsEdit')
formEditCards.addEventListener('submit', function (event) {
  event.preventDefault(); 
  createCard.renderItems();
  // const cardElement = createCard({name: cardsName.value, link: linkImage.value})
  // addCard(cardElement);
  formEditCards.reset()
  closePopup(popupCardsEdit);
  editCardFormValidator.disableButton();
});

//Функция добавления новой карточки
function createCard(item) {
  const card = new Card(item, '#user');
  return card.generateCard();
}

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

// const createCard = new Section ({ data: initialCards, renderer: (item) => {
//   const card = new Card (item, '#user');
//   const cardElement = card.generateCard();
//   createCard.addItem(cardElement);
// }} , cardsContainer);

// Спринт 7
//Загрузка карточек
initialCards.forEach((function () {
  const cardList = new Section ({ data: initialCards, renderer: createCard} , cardsContainer);
  cardList.renderItems();
  // const cardElement = createCard(item)
  // addCard(cardElement);
}));



const profileFormValidator = new FormValidator(popupProfile, config);
profileFormValidator.enableValidation();

const editCardFormValidator = new FormValidator(popupCardsEdit, config);
editCardFormValidator.enableValidation();


// Спринт 8



// function handleCardClick(name, link) {
//   //устанавливаем ссылку
//   //устанавливаем подпись картинке
//   //открываем попап универсальной функцией, которая навешивает обработчик Escape внутри себя
// }

// function handleOpenPopup(){
  
// }


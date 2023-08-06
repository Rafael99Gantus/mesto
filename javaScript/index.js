//Спринт 4

//Переменные
//Profile
const profileName = document.querySelector('.profile__name');
const profileActivity = document.querySelector('.profile__activity');
const openIconPopupProfile = document.querySelector('#openIconPopupProfile');//Кнопка "Открыть попап"

//PopupProfile
const editProfilePopup = document.querySelector('#editProfilePopup');// Попап изменения профиля
const closedIconPopupProfile = document.querySelector('#closedIconPopupProfile');//Кнопка "Закрыть попап"
const formProfile = document.querySelector('#fullname');// Form
const fullName = document.querySelector('#fieldNamePopupProfile');//Первое поле 
const work = document.querySelector('#fieldWorkPopupProfile');//Второе поле
const buttonSaveProfile = document.querySelector('#buttonSaveProfile');//Кнопка "Сохранить"



// Перенос полей

function valueTransferProfile(event) {
  event.preventDefault();
  let nameValue = fullName.value;
  profileName.textContent = nameValue;

  let workValue = work.value;
  profileActivity.textContent = workValue;
  popupProfileClose();
};

// Открытие/закрытие попапа

function popupProfileOpen() {
  const name = fullName.value;
  profileName.textContent = name;
  const activity = work.value;
  profileActivity.textContent = activity;

  editProfilePopup.classList.add('popup_opened');
};

function popupProfileClose() {
  editProfilePopup.classList.remove('popup_opened');
}

// Вызовы
openIconPopupProfile.addEventListener("click", popupProfileOpen);
closedIconPopupProfile.addEventListener("click", popupProfileClose);
formProfile.addEventListener("submit", valueTransferProfile);



//Спринт 5

//Переменные
//Profile
const openIconPopupCards = document.querySelector('#openIconPopupCards');//Кнопка "Открыть попап"

//Elements
const elementsName = document.querySelector('.elements__name');
const elementsImage = document.querySelector('.elements__image');

//PopupCards
const editCardsPopup = document.querySelector('#editCardsPopup');//Попап редактирования карточек
const closedIconPopupCards = document.querySelector('#closedIconPopupCards');//Кнопка "Закрыть попап"
const formCards = document.querySelector('#cardsEdit');// Form
const cardsName = document.querySelector('#fieldNamePopupCards');//Первое поле 
const linkImage = document.querySelector('#fieldLinkPopupCards');//Второе поле
const buttonSaveCards = document.querySelector('#buttonSaveCards');//Кнопка "Сохранить"


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

// Открытие/закрытие попапа

function popupCardsOpen() {
  editCardsPopup.classList.add('popup_opened');
};

function popupCardsClose() {
  editCardsPopup.classList.remove('popup_opened');
}

// Вызовы
openIconPopupCards.addEventListener("click", popupCardsOpen);
closedIconPopupCards.addEventListener("click", popupCardsClose);
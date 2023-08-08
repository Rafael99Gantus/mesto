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
const element = document.querySelector('.elements');
const allElements = document.querySelectorAll('.elements__element');//Все карточки
// const elementsName = document.querySelector('.elements__name');

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

//Загрузка карточек
initialCards.forEach((function (item) {
  const template = document.querySelector('#user').content;
  const card = template.querySelector('.elements__element').cloneNode(true);
  card.querySelector('.elements__name').textContent = item.name;
  card.querySelector('.elements__image').src = item.link;
  element.prepend(card);
}));

// Открытие/закрытие попапа
openIconPopupCards.addEventListener("click", function () {
  editCardsPopup.classList.add('popup_opened');
});
closedIconPopupCards.addEventListener("click", function () {
  editCardsPopup.classList.remove('popup_opened');
});

//Добавление карточки
let massive = document.querySelectorAll(".elements__trash");
function addCards(a, b) {
  event.preventDefault()
  const cardsTemplate = document.querySelector('#user').content;
  const cardsElement = cardsTemplate.querySelector('.elements__element').cloneNode(true);
  cardsElement.querySelector('.elements__name').textContent = a;
  cardsElement.querySelector('.elements__image').src = b;
  element.prepend(cardsElement);
};
buttonSaveCards.addEventListener('click', function () {
  const artist = document.querySelector('#fieldNamePopupCards');
  const link = document.querySelector('#fieldLinkPopupCards');
  addCards(artist.value, link.value);
  editCardsPopup.classList.remove('popup_opened');
  artist.value = '';
  link.value = '';
  massive = document.querySelectorAll(".elements__trash");
  console.log(massive);
});

//Удаление карточки
const trash = document.querySelector('.elements__trash');//Кнопка удалени


massive.forEach(function(trash) {
  trash.addEventListener("click", function() {
    trash.parentElement.remove();
  });
});

//Лайки
const heart = document.querySelector('.elements__heart');//Кнопка лайк

document.querySelectorAll(".elements__heart").forEach(function(heart) {
  heart.addEventListener("click", function(evt) {
    evt.target.classList.toggle('elements__heart_active');
  });
});

//Открытие попапа картинки
const elementsImage = document.querySelector('.elements__image');
const popupImage = document.querySelector('.popup__image');

const closedIconPopupImage = document.querySelector('#imagePopup');

document.querySelectorAll(".elements__image").forEach(function(elementsImage) {
  elementsImage.addEventListener("click", function() {
    imagePopup.classList.add('popup_opened')
    popupImage.src = elementsImage.src
  });
})
closedIconPopupImage.addEventListener("click", function () {
  imagePopup.classList.remove('popup_opened');
});

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


function popupProfileOpen(){
  popupProfile.classList.add('popup_opened');
}
function popupProfileClose() {
  popupProfile.classList.remove('popup_opened');
}
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

function popupValue() {
  const name = profileName.value;
  fullName.textContent = name;
  const activity = profileActivity.value;
  work.textContent = activity;
  popupProfileOpen();
};

// Вызовы
popupProfileOpenIcon.addEventListener("click", popupProfileOpen);
popupProfileClosedIcon.addEventListener("click", popupProfileClose);
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

//Загрузка карточек
initialCards.forEach((function (item) {
  const template = document.querySelector('#user').content;
  const card = template.querySelector('.elements__element').cloneNode(true);
  card.querySelector('.elements__name').textContent = item.name;
  card.querySelector('.elements__image').src = item.link;
  
  cardsContainer.prepend(card);
}));

// Открытие/закрытие попапа
popupCardsOpenIcon.addEventListener("click", function () {
  popupCardsEdit.classList.add('popup_opened');
});
popupCardsClosedIcon.addEventListener("click", function () {
  popupCardsEdit.classList.remove('popup_opened');
});

//Добавление карточки
const formEditCards = document.querySelector('#cardsEdit')
let massive = document.querySelectorAll(".elements__trash");
function addCards(a, b) {
  event.preventDefault()
  const cardsTemplate = document.querySelector('#user').content;
  const cardsElement = cardsTemplate.querySelector('.elements__element').cloneNode(true);
  cardsElement.querySelector('.elements__name').textContent = a;
  cardsElement.querySelector('.elements__image').src = b;
  cardsElement.querySelector('.elements__image').alt = a;
  
  cardsContainer.prepend(cardsElement);
};
formEditCards.addEventListener('submit', function () {
  const artist = document.querySelector('#fieldNamePopupCards');
  const link = document.querySelector('#fieldLinkPopupCards');
  addCards(artist.value, link.value);
  popupCardsEdit.classList.remove('popup_opened');
  artist.value = '';
  link.value = '';
  massive = document.querySelectorAll(".elements__trash");
  console.log(massive);
  massive.forEach(function (trash) {
    trash.addEventListener("click", function () {
      trash.parentElement.remove();
    });
  });
  document.querySelectorAll(".elements__heart").forEach(function (heart) {
    heart.addEventListener("click", function (evt) {
      evt.target.classList.toggle('elements__heart_active');
    });
  });

  document.querySelectorAll(".elements__image").forEach(function (elementsImage) {
    elementsImage.addEventListener("click", function () {
      imagePopup.classList.add('popup_opened')
      popupImage.src = elementsImage.src
      const popupTitle = document.querySelector('.popup__titleImage');
      popupTitle.textContent = elementsName.textContent
      popupImage.alt = elementsName.textContent
    });
  })
  closedIconPopupImage.addEventListener("click", function () {
    imagePopup.classList.remove('popup_opened');
  });
  
});

//Удаление карточки
const trash = document.querySelector('.elements__trash');//Кнопка удалени


massive.forEach(function (trash) {
  trash.addEventListener("click", function () {
    trash.parentElement.remove();
  });
});

//Лайки
const heart = document.querySelector('.elements__heart');//Кнопка лайк

document.querySelectorAll(".elements__heart").forEach(function (heart) {
  heart.addEventListener("click", function (evt) {
    evt.target.classList.toggle('elements__heart_active');
  });
});

//Открытие попапа картинки
const elementsImage = document.querySelector('.elements__image');
const popupImage = document.querySelector('.popup__image');
const elementsName = document.querySelector('.elements__name');
const closedIconPopupImage = document.querySelector('#imagePopup');

document.querySelectorAll(".elements__image").forEach(function (elementsImage) {
  elementsImage.addEventListener("click", function () {
    imagePopup.classList.add('popup_opened')
    popupImage.src = elementsImage.src
    const popupTitle = document.querySelector('.popup__titleImage');
    popupTitle.textContent = elementsName.textContent
    popupImage.alt = elementsName.textContent
  });
})
closedIconPopupImage.addEventListener("click", function () {
  imagePopup.classList.remove('popup_opened');
});

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

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', keyHandler);
  // Слушатель закрытия попапа кликом на оверлей
  popup.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(popup)
    }
  })
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', keyHandler);
  popup.removeEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      closePopup(popup)
    }
  })
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
const heart = document.querySelector('#first-heart');//Кнопка лайк


const elementsImage = document.querySelector('.elements__image');
const popupImage = document.querySelector('.popup__image');

const closedIconPopupImage = document.querySelector('#closedIconPopupImage');

function createCard(name, link) {
  const template = document.querySelector('#user').content;
  const card = template.querySelector('.elements__element').cloneNode(true);
  card.querySelector('.elements__name').textContent = name;
  const cardImage = card.querySelector('.elements__image');
  cardImage.src = link;
  cardImage.alt = name;

  // Лайк
  const heart = card.querySelector('#first-heart');//Кнопка лайка
  heart.addEventListener("click", heartAdd);
  function heartAdd() {
    heart.classList.toggle('elements__heart_active');
  }

  //Удаление карточки
  const trash = card.querySelector('.elements__trash');//Кнопка удаления
  trash.addEventListener("click", function () {
    trash.parentElement.remove();
  });

  //Открытие попапа изображения на cardImage
  const item = card.querySelector('.elements__image')
  item.addEventListener("click", function () {
    openPopup(imagePopup);
    popupImage.src = item.src
    const elementsName = card.querySelector('.elements__name');
    const popupTitle = document.querySelector('.popup__titleImage');

    popupTitle.textContent = elementsName.textContent;
    popupImage.alt = elementsName.textContent;
    

    // //Слушатель закрытия попапа кликом на оверлей
    
  });
  return card;
}

//Функция добавления карточки на страницу
function addCard(card) {
  cardsContainer.prepend(card);
}

//Загрузка карточек
initialCards.forEach((function (item) {
  const card = createCard(item.name, item.link);
  addCard(card);
}));

//Добавление карточки
const formEditCards = document.querySelector('#cardsEdit')


formEditCards.addEventListener('submit', function () {
  event.preventDefault();
  const artist = document.querySelector('#fieldNamePopupCards');
  const link = document.querySelector('#fieldLinkPopupCards');
  const card = createCard(artist.value, link.value);
  addCard(card);
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
  

  //Слушатель закрытия попапа кликом на оверлей
  
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
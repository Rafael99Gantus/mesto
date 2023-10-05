// Токен: 201e26a5-d782-4c58-9b61-1aee30a7887d
// Идентификатор группы: cohort-76
import './index.css';
import {
  initialCards, config, profileNameInput, profileJobInput,
  popupProfileOpenIcon, popupCardsEdit, popupProfile, popupProfileClosedIcon, popupCardsOpenIcon,
  elForInfo, cardsContainer, profileName, profileWork, profileImg, numberLikes
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const userInfo = new UserInfo(elForInfo);

const section = new Section({
  data: initialCards, renderer: (item) => {
    createCard(item)
  }, handleOpenPopup
}, cardsContainer);

const a = new Section({
  data: initialCards, renderer: (item) => {
    createNewCard(item)
  }, handleOpenPopup
}, cardsContainer);

const profileFormValidator = new FormValidator(popupProfile, config);
profileFormValidator.enableValidation();

const editCardFormValidator = new FormValidator(popupCardsEdit, config);
editCardFormValidator.enableValidation();

const popupFullImage = new PopupWithImage('#imagePopup');

const popupFormProfile = new PopupWithForm(popupProfile, handleProfileFormSubmit);

const popupCard = new PopupWithForm('#editCardsPopup', formValues => {
  a.renderer(formValues);
  popupCard.close();
})




//________________________________________________________________Загрузка данных ПРОФИЛЯ_______________________________________________________________________________
fetch('https://nomoreparties.co/v1/cohort-76/users/me', {
  headers: {
    authorization: '201e26a5-d782-4c58-9b61-1aee30a7887d'
  }
})
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
  })
  .then((res) => {
    profileName.textContent = res.name;
    profileWork.textContent = res.about;
    profileImg.src = res.avatar;
  })
  .catch((err)=>{
    console.log(`Обломись, это ${err}`)
  });
//______________________________________________________________________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________________________________________________________________



//________________________________________________________________Загрузка карточек с сервера КАРТОЧЕК_______________________________________________________________________________
fetch('https://mesto.nomoreparties.co/v1/cohort-76/cards', {
  headers: {
    authorization: '201e26a5-d782-4c58-9b61-1aee30a7887d'
  }
})
  .then((res) => {
    if (res.ok) {
      return res.json()
    }
  })
  .then((res) => {
    res.forEach(((item) => {
      createCard(item);
    }));
  })
  .then(() => {
    console.log('Загрузка данных КАРТОЧЕК')
  })
  .catch((err)=>{
    console.log(`Может не стоит ? Это ${err}`)
  });
//______________________________________________________________________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________________________________________________________________




//________________________________________________________________ФУНКЦИЯ сохранения данных ПРОФИЛЯ НА СЕРВЕР_______________________________________________________________________________
function saveInfoInServ(info){
  fetch('https://mesto.nomoreparties.co/v1/cohort-76/users/me', {
  method: 'PATCH',
  headers: {
    authorization: '201e26a5-d782-4c58-9b61-1aee30a7887d',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: info.name,
    about: info.work
  })
})
.then((res) => {
  if (res.ok) {
    return res.json()
  }
})
.then(() => {
  console.log('ФУНКЦИЯ сохранения данных ПРОФИЛЯ НА СЕРВЕР')
})
.catch((err)=>{
  console.log(`Лови ${err}`)
})
}
//______________________________________________________________________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________________________________________________________________



//________________________________________________________________ФУНКЦИЯ добавления новой КАРТОЧКИ НА СЕРВЕР_______________________________________________________________________________
function createCardInServ(newCard){
  fetch('https://mesto.nomoreparties.co/v1/cohort-76/cards', {
  method: 'POST',
  headers: {
    authorization: '201e26a5-d782-4c58-9b61-1aee30a7887d',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: newCard.name,
    about: newCard.work
  })
})
// .then((res) => {
//   if (res.ok) {
//     return res.json()
//   }
// })
.then((res)=>{
  console.log(res)
  console.log(res.name)
  // const card = new Card(item, '#user', handleOpenPopup);
  // numberLikes.textContent = res.likes.length
})
.catch((err)=>{
  console.log(`You are wellcome ${err}`)
})
}
//______________________________________________________________________________________________________________________________________________________________________________________
//______________________________________________________________________________________________________________________________________________________________________________________

// Функция создания карточки
function createCard(item) {
  const card = new Card(item, '#user', handleOpenPopup);
  const cardEl = card.generateCard();
  section.addItem(cardEl);
}

function createNewCard(item) {
  const card = new Card(item, '#user', handleOpenPopup);
  const cardEl = card.generateCard();
  a.addItem(cardEl);
  createCardInServ(item)
}

function handleProfileFormSubmit(formValues) {
  userInfo.setUserInfo({ name: formValues.fullname, work: formValues.activity });
  saveInfoInServ({ name: formValues.fullname, work: formValues.activity })
  popupFormProfile.close();
}

//Открытие POPUP PROFILE
popupProfileOpenIcon.addEventListener("click", function () {
  popupFormProfile.open();
  const getUserInfo = userInfo.getUserInfo();
  profileNameInput.value = getUserInfo.name;
  profileJobInput.value = getUserInfo.work;
});

//Открытие POPUP CARD
popupCardsOpenIcon.addEventListener("click", function () {
  popupCard.open();
  editCardFormValidator.disableButton();
});

// Открытие POPUP IMG
function handleOpenPopup(name, link) {
  popupFullImage.open(name, link);
}

popupFormProfile.setEventListeners();
popupCard.setEventListeners();
popupFullImage.setEventListeners();
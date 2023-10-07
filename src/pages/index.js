// Токен: 201e26a5-d782-4c58-9b61-1aee30a7887d
// Идентификатор группы: cohort-76
import './index.css';
import {
  initialCards, config, profileNameInput, profileJobInput, apiOptions,
  popupProfileOpenIcon, popupCardsEdit, popupProfile, popupProfileClosedIcon, popupCardsOpenIcon,
  elForInfo, cardsContainer, profileName, profileWork, profileImg, numberLikes, popupAnswer, trashIcon
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {Api} from '../components/Api.js';

const api = new Api(apiOptions)

const userInfo = new UserInfo(elForInfo);

const section = new Section({
  data: initialCards, renderer: (item) => {
    createCard(item)
  }, handleOpenPopup
}, cardsContainer);

const profileFormValidator = new FormValidator(popupProfile, config);
profileFormValidator.enableValidation();

const editCardFormValidator = new FormValidator(popupCardsEdit, config);
editCardFormValidator.enableValidation();

const popupFullImage = new PopupWithImage('#imagePopup');

const popupFormProfile = new PopupWithForm(popupProfile, handleProfileFormSubmit);

const popupFormAnswer = new PopupWithForm('#answerPopup', handleProfileFormSubmit);

const popupCard = new PopupWithForm('#editCardsPopup', formValues => {
  section.renderer(formValues);
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


//________________________________________________________________ФУНКЦИЯ сохранения данных ПРОФИЛЯ НА СЕРВЕР_______________________________________________________________________________
// function saveInfoInServ(info){
//   fetch('https://mesto.nomoreparties.co/v1/cohort-76/users/me', {
//   method: 'PATCH',
//   headers: {
//     authorization: '201e26a5-d782-4c58-9b61-1aee30a7887d',
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({
//     name: info.name,
//     about: info.work
//   })
// })
// .then((res) => {
//   if (res.ok) {
//     return res.json()
//   }
// })
// .then(() => {
//   console.log('ФУНКЦИЯ сохранения данных ПРОФИЛЯ НА СЕРВЕР')
// })
// .catch((err)=>{
//   console.log(`Лови ${err}`)
// })
// }
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



//Функция создания карточки
function createCard(item) {
  // const numberlike = api.numberLikes();
  const card = new Card(item, cardsContainer, handleOpenPopup, {
    handelDeleteCard: (id) => {
      api.deleteCard(id)
      .then(() => {
        card.delete();
      })
    }
  });
  const cardEl = card.generateCard();
  section.addItem(cardEl);
  api.createCard(item);
}

// function deleteCard (item){
//   const card = new Card(item, handleOpenPopup);
// }

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

// Открытие POPUPANSWER


// Открытие POPUP IMG
function handleOpenPopup(name, link) {
  popupFullImage.open(name, link);
}

popupFormProfile.setEventListeners();
popupCard.setEventListeners();
popupFullImage.setEventListeners();
popupFormAnswer.setEventListeners();
api.getAllCards()
.then((data) => {
  data.forEach((todoData) => {
    createCard(todoData);
  });
});
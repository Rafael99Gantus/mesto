// Токен: 201e26a5-d782-4c58-9b61-1aee30a7887d
// Идентификатор группы: cohort-76
import './index.css';
import {
  initialCards, config, profileNameInput, profileJobInput, apiOptions, avatarIcon, avatarPopup, buttonPopup,
  popupProfileOpenIcon, popupCardsEdit, popupProfile, popupProfileClosedIcon, popupCardsOpenIcon, templateUser,
  elForInfo, cardsContainer, profileName, profileWork, profileImg, numberLikes, popupAnswer, trashIcon, like
} from '../utils/constants.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import PopupWithDelete from '../components/PopupWithDelete.js';

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

const popupFormAnswer = new PopupWithDelete('#answerPopup', {handleDeleteCard: (el)=>{
  api.deleteCard(el)
  .then(()=>{
    popupFormAnswer.close();
  })
  .catch((err)=>{
    console.log(`Ups ${err}`)
  })
  console.log(el);
  // popupFormAnswer.close();
}});

const popupFormAvatar = new PopupWithForm('#editAvatar', handleAvatarForSubmit);

const popupCard = new PopupWithForm('#editCardsPopup',
  data => {
    console.log(data)

    popupCard.setLoader();
    api.createCardInServ(data)
      .then((data) => {
        createCard(data, '#user', handleOpenPopup);
        popupCard.close();
      })
      .catch((err) => {
        console.log(`Упс${err}`);
      })
      .finally(() => {
        popupCard.removeLoader();
      })
  })

// const popupCard = new PopupWithForm('#editCardsPopup', handleSubmitAddTodoForm)

// const handleDeleteFormSubmit = (event) => {
//   event.preventDefault();

//   api.createCardInServ({ name: input.value })
//     .then((data) => {
//       createCard(data);
//     })

//   input.value = "";
// };

// , {
//   handelDeleteCard: (id) => {
//     api.deleteCard(id)
//       .then(() => {
//         card.delete();
//       })
//   }

//Функция создания карточки
function createCard(item) {
  // const numberlike = api.numberLikes();
  const card = new Card(item, '#user', handleOpenPopup, 
  {setLike: (id)=>{
      api.setLike(id)
      .then((res)=>{
        card.handleLike();
        card.numberLike(res)
      })
    }},

    {deleteLike: ()=>{
      api.removeLike(id)
      .then(()=>{
        card.delLike();
        card.numberLikes(data)
      })
    }},
    userInfo.userId
  );
  const cardEl = card.generateCard();
  section.addItem(cardEl);
  // api.createCardInServ(item);
}

function handleProfileFormSubmit(formValues) {
  api.saveInfoInServ({ name: formValues.fullname, work: formValues.activity })
  .then(()=>{
    userInfo.setUserName({ name: formValues.fullname, work: formValues.activity });
    popupFormProfile.close();
  })
  .catch((err)=>{
    console.log(`Ups ${err}`)
  })
  
}
//____________________________________________________________________________________________________________________________________________________________________________
function handleAvatarForSubmit(item) {
  api.saveAvatarInServ({ avatar: item.link })
  .then(()=>{
    userInfo.setUserAvatar({avatar: item.link});
    popupFormAvatar.close();
  })
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

// Открытие POPUP AVATAR
avatarIcon.addEventListener("click", function () {
  popupFormAvatar.open();
});

// function handlePopupAnswer(){
//   popupFormAnswer.open();
// }

// Открытие POPUP IMG
function handleOpenPopup(name, link) {
  popupFullImage.open(name, link);
}

popupFormProfile.setEventListeners();
popupCard.setEventListeners();
popupFullImage.setEventListeners();
popupFormAnswer.setEventListeners();
popupFormAvatar.setEventListeners();

Promise.all([api.getAllCards(), api.getInfo()])
  .then(([items, item]) => {
    section.renderItems(items);
    userInfo.setUserInfo(item);
    // profileName.textContent = item.name;
    // profileWork.textContent = item.about;
    // profileImg.src = item.avatar;
  })
  .catch((err) => {
    console.log(err);
  });



// deleteCard = this._element.querySelector('#buttonAnswer');
// deleteCard.addEventListener('click', () => {this._handleDelete();});
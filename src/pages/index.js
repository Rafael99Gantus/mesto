import './index.css';
import {
  initialCards, config, profileNameInput, profileJobInput, apiOptions, avatarIcon,
  popupProfileOpenIcon, popupCardsEdit, popupProfile, popupCardsOpenIcon, elForInfo, cardsContainer
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

const avatarFormValidator = new FormValidator('#editAvatar', config);
avatarFormValidator.enableValidation();

const popupFullImage = new PopupWithImage('#imagePopup');

const popupFormProfile = new PopupWithForm(popupProfile, handleProfileFormSubmit);

const popupFormAnswer = new PopupWithDelete('#answerPopup', {
  handleDeleteCard: (card) => {
    api.deleteCard(card._id)
      .then(() => {
        popupFormAnswer.close();
        card.delete();
      })
      .catch((err) => {
        console.log(`Ups ${err}`)
      })
  }
},
//   {
//     getAllCardsId: () => {
//       api.getAllCardsId()
//         .then((res) => {
//           console.log(`Ups ${res}`)
//         })
//         .catch((err) => {
//           console.log(`Ups ${err}`)
//         })
//     }
//   },
  // { handleDeleteCard: ()=>{
  //   Promise.all([api.deleteCard(), api.getAllCardsId()])
  //     .then(([items, item]) => {
  //       console.log(items);
  //       console.log(item);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }
    
);

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
        popupCard.removeLoaderEditCard();
      })
  })


//Функция создания карточки
function createCard(item) {
  const card = new Card(item, '#user', handleOpenPopup,
    {
      setLike: (id) => {
        api.setLike(id)
          .then((res) => {
            card.handleLike();
            card.numberLike(res)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },

    {
      deleteLike: (id) => {
        api.removeLike(id)
          .then((res) => {
            card.delLike();
            card.numberLike(res)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },() => {
      card.a(card._id)
    },
    () => {
      popupFormAnswer.set(card)
    }
  );
  const cardEl = card.generateCard();
  section.addItem(cardEl);
}

// function handleOpenTrashPopup(card) {
//   popupFormAnswer.set(card)
// }

function handleProfileFormSubmit(formValues) {
  popupFormProfile.setLoader();
  api.saveInfoInServ({ name: formValues.fullname, work: formValues.activity })
    .then(() => {
      userInfo.setUserName({ name: formValues.fullname, work: formValues.activity });
      popupFormProfile.close();
    })
    .catch((err) => {
      console.log(`Ups ${err}`)
    })
    .finally(() => {
      popupFormProfile.removeLoader();
    })
}
//____________________________________________________________________________________________________________________________________________________________________________
function handleAvatarForSubmit(item) {
  popupFormAvatar.setLoader();
  api.saveAvatarInServ({ avatar: item.link })
    .then(() => {
      userInfo.setUserAvatar({ avatar: item.link });
      popupFormAvatar.close();
    })
    .catch((err) => {
      console.log(`bzzzz...${err}`)
    })
    .finally(() => {
      popupFormAvatar.removeLoader();
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
  avatarFormValidator.disableButton();
});

// Открытие POPUP IMG
function handleOpenPopup(name, link) {
  popupFullImage.open(name, link);
}

popupFormProfile.setEventListeners();
popupCard.setEventListeners();
popupFullImage.setEventListeners();
popupFormAnswer._setEventListeners();
popupFormAvatar.setEventListeners();

Promise.all([api.getAllCards(), api.getInfo()])
  .then(([items, item]) => {
    section.renderItems(items);
    userInfo.setUserInfo(item);
  })
  .catch((err) => {
    console.log(err);
  });
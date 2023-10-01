const arkhyz = new URL('../images/arkhyz.jpg', import.meta.url);
const chelyabinskOblast = new URL('../images/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovo = new URL('../images/ivanovo.jpg', import.meta.url);
const kamchatka = new URL('../images/kamchatka.jpg', import.meta.url);
const kholmogorskyRayon = new URL('../images/kholmogorsky-rayon.jpg', import.meta.url);
const baikal = new URL('../images/baikal.jpg', import.meta.url);

export const initialCards = [
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

// const initialCards = [
//   {
//     name: 'Архыз',
//     link: `${arkhyz}`
//   },
//   {
//     name: 'Челябинская область',
//     link: `${chelyabinskOblast}`
//   },
//   {
//     name: 'Иваново',
//     link: `${ivanovo}`
//   },
//   {
//     name: 'Камчатка',
//     link: `${kamchatka}`
//   },
//   {
//     name: 'Холмогорский район',
//     link: `${kholmogorskyRayon}`
//   },
//   {
//     name: 'Байкал',
//     link: `${baikal}`
//   }
// ];
// const initialCards = [
//   {
//     name: 'Архыз',
//     link: `./images/arkhyz.jpg`
//   },
//   {
//     name: 'Челябинская область',
//     link: `./images/chelyabinsk-oblast.jpg`
//   },
//   {
//     name: 'Иваново',
//     link: `./images/ivanovo.jpg`
//   },
//   {
//     name: 'Камчатка',
//     link: `./images/kamchatka.jpg`
//   },
//   {
//     name: 'Холмогорский район',
//     link: `./images/kholmogorsky-rayon.jpg`
//   },
//   {
//     name: 'Байкал',
//     link: `./images/baikal.jpg`
//   }
// ];
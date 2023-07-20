let fullName = document.querySelector('#popup__field_first');
let work = document.querySelector('#popup__field_second');
let button = document.querySelector('.popup__button');
const profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');
const popup = document.querySelector('.popup');
const form = document.querySelector('#fullname');
const popupCloseIcon = document.querySelector('#closed');
const popupOpenIcon = document.querySelector('#popup');

// Перенос полей

function valueTransfer(event) {
    event.preventDefault();
    let nameValue = fullName.value;
    profileName.textContent = nameValue;
    
    let workValue = work.value;
    profileActivity.textContent = workValue;
    popupClose();
};

// Открытие/закрытие попапа

function popupOpen() {
    const name = fullName.value;
    profileName.textContent = name;
    const activity = work.value;
    profileActivity.textContent = activity;

    popup.classList.add('popup_opened');
};

function popupClose() {
    popup.classList.remove('popup_opened');
}

// Вызовы
popupOpenIcon.addEventListener("click", popupOpen);
popupCloseIcon.addEventListener("click", popupClose);
form.addEventListener("submit", valueTransfer);
// Перенос значения полей из попапа

let fullName = document.querySelector('#popup__field_first');
let work = document.querySelector('#popup__field_second');
let button = document.querySelector('.popup__button');
const profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');
const popup = document.querySelector('.popup');
const form = document.querySelector('.fullname');

function valueTransfer(event) {
    event.preventDefault();
    let nameValue = fullName.value;
    profileName.textContent = nameValue;
    alert('123')
    let workValue = work.value;
    profileActivity.textContent = workValue;
    popupClose();
};
button.addEventListener("click", valueTransfer);

// Открытие/закрытие попапа

const popupCloseIcon = document.querySelector('#closed');
const popupOpenIcon = document.querySelector('#popup');

function popupOpen() {
    const name = fullName.value;
    profileName.textContent = name;
    const activity = work.value;
    profileActivity.textContent = activity;

    popup.classList.add('popup_opened');
};
popupOpenIcon.addEventListener("click", popupOpen);

function popupClose() {
    popup.classList.remove('popup_opened');
}
popupCloseIcon.addEventListener("click", popupClose);

document.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        field()
    }
});

// Анимация лайка у первой карточки

let heartFirst = document.querySelector('#first-heart');

function heartActiveFirst() {
    heartFirst.style.background = "url('images/heartActive.svg') no-repeat center";
    heartFirst.style.opacity = "1";
}
heartFirst.addEventListener('click', heartActiveFirst);


// Анимация лайка у второй карточки

let heartSecond = document.querySelector('#second-heart');

function heartActiveSecond() {
    heartSecond.style.background = "url('images/heartActive.svg') no-repeat center";
    heartSecond.style.opacity = "1";
}
heartSecond.addEventListener('click', heartActiveSecond);


// Анимация лайка у третьей карточки

let heartThird = document.querySelector('#third-heart');

function heartActiveThird() {
    heartThird.style.background = "url('images/heartActive.svg') no-repeat center";
    heartThird.style.opacity = "1";
}
heartThird.addEventListener('click', heartActiveThird);


// Анимация лайка у четвертой карточки

let heartFourth = document.querySelector('#fourth-heart');

function heartActiveFourth() {
    heartFourth.style.background = "url('images/heartActive.svg') no-repeat center";
    heartFourth.style.opacity = "1";
}
heartFourth.addEventListener('click', heartActiveFourth);


// Анимация лайка у пятой карточки

let heartFifth = document.querySelector('#fifth-heart');

function heartActiveFifth() {
    heartFifth.style.background = "url('images/heartActive.svg') no-repeat center";
    heartFifth.style.opacity = "1";
}
heartFifth.addEventListener('click', heartActiveFifth);


// Анимация лайка у шестой карточки

let heartSixth = document.querySelector('#sixth-heart');

function heartActiveSixth() {
    heartSixth.style.background = "url('images/heartActive.svg') no-repeat center";
    heartSixth.style.opacity = "1";
}
heartSixth.addEventListener('click', heartActiveSixth);
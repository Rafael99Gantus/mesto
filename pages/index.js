


let fieldFirst = document.querySelector('.popup__field-first');
let fieldSecond = document.querySelector('.popup__field-second');
// console.log('.popup__button');

let box = document.querySelector('.popup__box');
let button = box.querySelector('.popup__button');
let profileName = document.querySelector('.profile__name');
let profileActivity = document.querySelector('.profile__activity');
let popup = document.querySelector('#popup');

function field() {
    let a = fieldFirst.value;
    console.log(a);
    profileName.innerText = a;

    let b = fieldSecond.value;
    console.log(b);
    profileActivity.innerText = b;
    button.onclick = function() {
        document.querySelector('popup').hidden = true;
      };
};
button.addEventListener("click", field); 

function closeField () {
    popup.style.visibility = 'hidden';
}
button.addEventListener("click", closeField);
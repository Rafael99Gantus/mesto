let formElement = document.querySelector('.popup__closed');

function showClick() {
    console.log('Форма отправлена');
}; 

formElement.addEventListener("click", showClick); 
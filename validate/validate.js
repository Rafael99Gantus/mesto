// enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
//   }); 





//Спринт 6


// formProfile - первая форма
// fullName - первое поле
// work - второе поле

const fieldProfileNameError = formProfile.querySelector(`.${fullName.id}-error`); //span первого поля
const fieldProfileActivError = formProfile.querySelector(`.${work.id}-error`); //span второго поля
console.log(fieldProfileNameError);
console.log(fieldProfileActivError);
  

// const showInputProfileNameError = (element, errorMessage) => {
//   element.classList.add('popup__field_type_error');
//   fieldProfileNameError.textContent = errorMessage;
//   fieldProfileNameError.classList.add('popup__input-error_active');
// };
// const hideInputProfileNameError = (element) => {
//   element.classList.remove('popup__field_type_error');
//   fieldProfileNameError.classList.remove('popup__input-error_active');
//   fieldProfileNameError.textContent = '';
// };
// const isValidProfileName = () => {
//   if (!fullName.validity.valid) {
//     showInputProfileNameError(fullName, fullName.validationMessage);
//   } else {
//     hideInputProfileNameError(fullName);
//   }
// };
// fullName.addEventListener('input', isValidProfileName);


const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideInputError(formElement, inputElement);
  }
}; 

const showInputError = (formElement, inputElement, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Остальной код такой же
  inputElement.classList.add('popup__field_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Остальной код такой же
  inputElement.classList.remove('popup__field_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
}; 

const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll('.popup__field'));

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement)
    });
  });
};
const enableValidation = () => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  console.log(formList)
  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement);
  });
};

// Вызовем функцию
enableValidation(); 






// Блокировка кнопок форм
function changeNameForm(isFormValid){
    if (isFormValid > 0){
      buttonSaveProfile.removeAttribute('disabled');
      buttonSaveProfile.classList.remove('popup__button_disabled');
    }else{
      buttonSaveProfile.setAttribute('disabled', true);
      buttonSaveProfile.classList.add('popup__button_disabled');
    }
  }
  
  document.forms.fullname.addEventListener('input', function () {
    const isValid = fullName.value.length > 0 && work.value.length > 0;
    changeNameForm(isValid);
  });
  
  function changeEditForm(isFormValid){
    if (isFormValid > 0){
      buttonSaveCards.removeAttribute('disabled');
      buttonSaveCards.classList.remove('popup__button_disabled');
    }else{
      buttonSaveCards.setAttribute('disabled', true);
      buttonSaveCards.classList.add('popup__button_disabled');
    }
  }
  
  document.forms.edit.addEventListener('input', function () {
    const isValid = cardsName.value.length > 0 && linkImage.value.length > 0;
    changeEditForm(isValid);
  });
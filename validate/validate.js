//Спринт 6


// formProfile - первая форма
// fullName - первое поле
// work - второе поле

const fieldProfileNameError = formProfile.querySelector(`.${fullName.id}-error`); //span первого поля
const fieldProfileActivError = formProfile.querySelector(`.${work.id}-error`); //span второго поля
console.log(fieldProfileNameError);
console.log(fieldProfileActivError);



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

const setEventListeners = (formElement, config) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
  const submitButton = Array.from(formElement.querySelectorAll(config.submitButtonSelector));
  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement)
      toggleButtonState(submitButton, inputList, config);
    });
  });
};



  const enableValidation = config => {
    const formList = document.querySelectorAll(config.formSelector);
    formList.forEach((formElement) => {
      setEventListeners(formElement, config);
    })
  }

// Вызовем функцию
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__field',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});


// Блокировка кнопки сабмит
const inputMassive = document.querySelectorAll('.popup__field');
const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

function toggleButtonState(submitButton, inputList, config) {
  if (hasInvalidInput(inputList)) {
    disableButton(submitButton, config);
  }
  else {
    enableButton(submitButton, config);
  }
}

function disableButton (submitButton, config){
  submitButton.setAttribute('disabled', true); 
  submitButton.classList.add(config.inactiveButtonClass);
}

function enableButton (submitButton, config){
  submitButton.removeAttribute('disabled'); 
  submitButton.classList.remove(config.inactiveButtonClass);
}
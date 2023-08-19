//Спринт 6


// formProfile - первая форма
// fullName - первое поле
// work - второе поле

const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config);
  } else {
    hideInputError(formElement, inputElement, config);
  }
};

const showInputError = (formElement, inputElement, errorMessage, config) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Остальной код такой же
  inputElement.classList.add(config.fieldErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(config.inputErrorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  // Остальной код такой же
  inputElement.classList.remove(config.fieldErrorClass);
  errorElement.classList.remove(config.inputErrorClass);
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
      isValid(formElement, inputElement, config)
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
  fieldErrorClass: 'popup__field_type_error',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});


// Блокировка кнопки сабмит
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

function disableButton(submitButton, config) {
  //submitButton.setAttribute('disabled', '');
  submitButton.classList.add(config.inactiveButtonClass);
  submitButton.disabled = true;
}

function enableButton(submitButton, config) {
  //submitButton.removeAttribute('disabled');
  submitButton.classList.remove(config.inactiveButtonClass);
  submitButton.disabled = false;
}
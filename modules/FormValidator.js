const cardsName = document.querySelector('#fieldNamePopupCards');//Первое поле 
const linkImage = document.querySelector('#fieldLinkPopupCards');//Второе поле

export class FormValidator{
  constructor(formElement, config){
    this._formElement = formElement;
    this._formSelector = config.formElement;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._fieldErrorClass = config.fieldErrorClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    
  }

  _isValid (formElement, inputElement){
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  };

  _setEventListeners(){
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(this._formElement, inputElement)
        this._toggleButtonState(this._submitButton, this._inputList);
      });
    });
  };

  

  _showInputError (formElement, inputElement, errorMessage) {
    // Находим элемент ошибки внутри самой функции
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.add(this._fieldErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._inputErrorClass);
  };
  
  _hideInputError (formElement, inputElement) {
    // Находим элемент ошибки
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    // Остальной код такой же
    inputElement.classList.remove(this._fieldErrorClass);
    errorElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
  };

  // Блокировка кнопки сабмит
  

_toggleButtonState(submitButton, inputList) {
  if (this._hasInvalidInput(inputList)) {
    this._disableButton(submitButton);
  }
  else {
    this._enableButton(submitButton);
  }
}

_hasInvalidInput (inputList){
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

_disableButton() {
  //submitButton.setAttribute('disabled', '');
  this._submitButton.classList.add(this._inactiveButtonClass);
  this._submitButton.disabled = true;
}

_enableButton() {
  //submitButton.removeAttribute('disabled');
  this._submitButton.classList.remove(this._inactiveButtonClass);
  this._submitButton.disabled = false;
}

_clearField(){
  cardsName.value = "";
  linkImage.value = "";
  this._disableButton();
}

enableValidation () {
  this._setEventListeners()
};

// enableValidation() {
//   const formList = document.querySelectorAll(this._formSelector);
//   formList.forEach((formElement) => {
//     const valid = new FormValidator(config, formElement);
//     valid.setEventListeners(formElement, config);
//   })
// }

}

  // export class FormValidator{
  //   constructor(config, formElement){
  //     this._config = config;
  //     this._formElement = formElement;
  //   }
  
  //   setEventListeners(){
  //     // Находим все поля внутри формы,
  //     // сделаем из них массив методом Array.from
  //     const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
  //     const submitButton = Array.from(this._formElement.querySelectorAll(this._config.submitButtonSelector));
  //     // Обойдём все элементы полученной коллекции
  //     inputList.forEach((inputElement) => {
  //       // каждому полю добавим обработчик события input
  //       inputElement.addEventListener('input', () => {
  //         // Внутри колбэка вызовем isValid,
  //         // передав ей форму и проверяемый элемент
  //         this._isValid(this._formElement, inputElement, this._config)
  //         toggleButtonState(submitButton, inputList, this._config);
  //       });
  //     });
  //   };
  
  //   _isValid (){
  //     if (!inputElement.validity.valid) {
  //       this._showInputError(this._formElement, inputElement, inputElement.validationMessage, this._config);
  //     } else {
  //       this._hideInputError(this._formElement, inputElement, this._config);
  //     }
  //   };
  
  //   _showInputError () {
  //     // Находим элемент ошибки внутри самой функции
  //     const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  //     // Остальной код такой же
  //     inputElement.classList.add(this._config.fieldErrorClass);
  //     errorElement.textContent = errorMessage;
  //     errorElement.classList.add(this._config.inputErrorClass);
  //   };
    
  //   _hideInputError () {
  //     // Находим элемент ошибки
  //     const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
  //     // Остальной код такой же
  //     inputElement.classList.remove(this._config.fieldErrorClass);
  //     errorElement.classList.remove(this._config.inputErrorClass);
  //     errorElement.textContent = '';
  //   };
  // }

//   // Блокировка кнопки сабмит
// const hasInvalidInput = (inputList) => {
//   // проходим по этому массиву методом some
//   return inputList.some((inputElement) => {
//     // Если поле не валидно, колбэк вернёт true
//     // Обход массива прекратится и вся функция
//     // hasInvalidInput вернёт true

//     return !inputElement.validity.valid;
//   })
// };

// export function toggleButtonState(submitButton, inputList, config) {
//   if (hasInvalidInput(inputList)) {
//     disableButton(submitButton, config);
//   }
//   else {
//     enableButton(submitButton, config);
//   }
// }

// function disableButton(submitButton, config) {
//   //submitButton.setAttribute('disabled', '');
//   submitButton.classList.add(config.inactiveButtonClass);
//   submitButton.disabled = true;
// }

// function enableButton(submitButton, config) {
//   //submitButton.removeAttribute('disabled');
//   submitButton.classList.remove(config.inactiveButtonClass);
//   submitButton.disabled = false;
// }
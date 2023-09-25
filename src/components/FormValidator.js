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
    this.disableButton(submitButton);
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

disableButton() {
  //submitButton.setAttribute('disabled', '');
  this._submitButton.classList.add(this._inactiveButtonClass);
  this._submitButton.disabled = true;
}

_enableButton() {
  //submitButton.removeAttribute('disabled');
  this._submitButton.classList.remove(this._inactiveButtonClass);
  this._submitButton.disabled = false;
}

enableValidation () {
  this._setEventListeners()
};
};
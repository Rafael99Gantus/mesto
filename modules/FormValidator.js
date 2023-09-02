export class FormValidator{
    constructor(config, formElement){
      this._config = config;
      this._formElement = formElement;
    }
  
    setEventListeners(){
      // Находим все поля внутри формы,
      // сделаем из них массив методом Array.from
      const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
      const submitButton = Array.from(this._formElement.querySelectorAll(this._config.submitButtonSelector));
      // Обойдём все элементы полученной коллекции
      inputList.forEach((inputElement) => {
        // каждому полю добавим обработчик события input
        inputElement.addEventListener('input', () => {
          // Внутри колбэка вызовем isValid,
          // передав ей форму и проверяемый элемент
          this._isValid(this._formElement, inputElement, this._config)
          toggleButtonState(submitButton, inputList, this._config);
        });
      });
    };
  
    _isValid (){
      if (!inputElement.validity.valid) {
        this._showInputError(this._formElement, inputElement, inputElement.validationMessage, this._config);
      } else {
        this._hideInputError(this._formElement, inputElement, this._config);
      }
    };
  
    _showInputError () {
      // Находим элемент ошибки внутри самой функции
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      // Остальной код такой же
      inputElement.classList.add(this._config.fieldErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._config.inputErrorClass);
    };
    
    _hideInputError () {
      // Находим элемент ошибки
      const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
      // Остальной код такой же
      inputElement.classList.remove(this._config.fieldErrorClass);
      errorElement.classList.remove(this._config.inputErrorClass);
      errorElement.textContent = '';
    };
  }
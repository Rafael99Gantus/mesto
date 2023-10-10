import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, callBack) {
        super(popupSelector);
        this._callBack = callBack;
        this._formPopup = this._popup.querySelector('.popup__form');
        this._fields = this._popup.querySelectorAll('.popup__field');
        this._button = this._popup.querySelector('.popup__button');
        this._textButton = this._button.textContent;
    }

    close() {
        super.close();
        this._formPopup.reset();
    }

    _getInputValues() {
        this._formValues = {};
        this._fields.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callBack(this._getInputValues());
        })
    }

    setLoader() {
        this._button.textContent = 'Сохранение...';
    }

    removeLoader() {
        this._button.textContent = 'Сохранить';
    }

    removeLoaderEditCard() {
        this._button.textContent = 'Создать';
    }
}
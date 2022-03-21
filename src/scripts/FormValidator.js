class FormValidator {
    constructor(settings, formElement) {
        this._formSelector = settings.formSelector;
        this._inputSelector = settings.inputSelector;
        this._submitButtonSelector = settings.submitButtonSelector;
        this._inactiveButtonClass = settings.inactiveButtonClass;
        this._inputErrorClass = settings.inputErrorClass;
        this._errorClass = settings.errorClass;
    
        this._formElement = formElement;
    }

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        errorElement.textContent = "";
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        
    }

    _checkInputValidity(inputElement) {
        if (inputElement.validity.valid) {
            this._hideInputError(inputElement);
        } else {
            this._showInputError(inputElement);
        }
    }

    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
          return !inputElement.validity.valid;
        });
    }

    _toggleButtonState() {
        if (this._hasInvalidInput()) {
          this._buttonElement.classList.add(this._inactiveButtonClass);
          this._buttonElement.disabled = true;
        } else {
          this._buttonElement.classList.remove(this._inactiveButtonClass);
          this._buttonElement.disabled = false;
        }
    }

    _setEventListeners() {
        this._inputList = Array.from(
          this._formElement.querySelectorAll(this._inputSelector)
        );
        this._buttonElement = this._formElement.querySelector(
          this._submitButtonSelector
        );
        this._toggleButtonState();
        this._inputList.forEach((input) => {
          input.addEventListener("input", () => {
            this._toggleButtonState();
            this._checkInputValidity(input);
          });
        });
    }

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => {
          evt.preventDefault();
        });
        this._setEventListeners();
    }

    reset() {
        this._toggleButtonState();
        this._inputList.forEach((inputElement) => {
          this._hideInputError(inputElement);
        });
    }
}

export default FormValidator;
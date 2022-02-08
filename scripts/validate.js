// const resetValidation = () => {

// }
// well, reset i will make later =)

const showInputError = (input, formElement, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(inputErrorClass);
    errorElement.classList.add(errorClass);
};

const hideInputError = (input, formElement, {inputErrorClass, errorClass}) => {
    const errorElement = formElement.querySelector(`.${input.id}-error`);
    errorElement.textContent = "";
    input.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
};

const checkInputValidity = (input, settings, formElement) => {
    if (input.validity.valid) {
        hideInputError(input, formElement, settings);
    } else {
        showInputError(input, formElement, settings);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};

const toggleButtonState = (inputList, buttonElement, { inactiveButtonClass }) => {

    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(inactiveButtonClass);
        buttonElement.disabled = false;
    }
};

const setEventListners = (formElement, settings) => {
    const inputList = [...formElement.querySelectorAll(settings.inputSelector)];
    const button = formElement.querySelector(settings.submitButtonSelector);
    inputList.forEach((input) => {
        input.addEventListener("input", () => {
            checkInputValidity(input, settings, formElement);
            toggleButtonState(inputList, button, settings);
        });
    });
    toggleButtonState(inputList, button, settings);
};

const enableValidation = (settings) => {
    const formElements = [...document.querySelectorAll(settings.formSelector)];
    formElements.forEach(formElement => {
        formElement.addEventListener("Submit", (e) => e.preventDefault());
        setEventListners(formElement, settings);
    });
};


enableValidation({
    formSelector: ".form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__submit",
    inactiveButtonClass: "popup__submit_disabled",
    inputErrorClass: "popup__input-error",
    errorClass: "input-error_visible"
  });
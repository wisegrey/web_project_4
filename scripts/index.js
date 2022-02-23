import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { initialCards } from "./cards.js";
// import { disableButton } from "./validate.js";
import { openPopup, closePopup } from "./utils.js";


// settings for Validator
const settings = {
  formSelector: ".form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_disabled",
  inputErrorClass: "popup__input-error",
  errorClass: "input-error_visible"
};

// Let's find the form in the DOM
const popupEditElement = document.querySelector("#popup__edit");
const popupAddElement = document.querySelector("#popup__add");
const formElement = document.querySelector(".popup__form");
const nameForPlaceholder = document.querySelector(".profile__name");
const occupationForPlaceholder = document.querySelector(".profile__occupation");
const editButton = document.querySelector("#profile__edit");
const closeEditPopupButton = popupEditElement.querySelector("#close_edit_profile");
const closeAddPopupButton = popupAddElement.querySelector("#close_add_card");
const submitCardButton = document.querySelector("#addCardForm");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#occupation");
const imagePopup = document.querySelector("#popup__pic");
const cardsContainer = document.querySelector(".elements");
const addCardButton = document.querySelector(".profile__add");
const bigPictureClose = document.querySelector("#popup__image-close");
const newName = document.querySelector("#title");
const newImage = document.querySelector("#imageUrl");
const popups = document.querySelectorAll(".popup");
const cardCreateButton = document.querySelector("#submitCardButton");


// create initial cards
function populateElements() {
  initialCards.forEach(card => {
    cardsContainer.append(new Card(card, "#newCardTemplate").createCard());
  });
}
populateElements();

//all for validators
const editForm = document.querySelector("#editProfileForm");
const addForm = document.querySelector("#addCardForm");
export const editFormValidator = new FormValidator(settings, editForm);
export const addFormValidator = new FormValidator(settings, addForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();

// popup handlers
function handleOpenEditForm() {
  nameInput.value = nameForPlaceholder.textContent;
  jobInput.value = occupationForPlaceholder.textContent;
  openPopup(popupEditElement);
}

function handleOpenAddForm() {
  openPopup(popupAddElement);
}

function handleCloseEditPopup(){
  closePopup(popupEditElement);
}

function handleCloseAddPopup(){
  closePopup(popupAddElement);
}

// close/makes invisible picture popup
function handleCloseFullScreenPic(){
  closePopup(imagePopup);
}

// takes inputs and adds them to profile in corresponding fields
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameForPlaceholder.textContent = nameInput.value;
  occupationForPlaceholder.textContent = jobInput.value;
  closePopup(popupEditElement);
}

// little helper. shuts down submit key after we create new card
const disableButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
};

// function to add a single card from inputs in Add "new place"
function handleCardSubmit(evt) {
  evt.preventDefault();
  const newCardData = { name: newName.value, link: newImage.value};
  const card = new Card(newCardData, "#newCardTemplate").createCard();
  cardsContainer.prepend(card);
  popupAddElement.querySelector(".form").reset();
  disableButton(cardCreateButton, settings.inactiveButtonClass);
  closePopup(popupAddElement);
}

// close popup after mouseclicking everywhere on page, except form
function handleOverlayClick(evt) {
  closePopup(evt.target);
}

// event listeners
formElement.addEventListener('submit', handleProfileFormSubmit);
editButton.addEventListener('click', handleOpenEditForm);
closeEditPopupButton.addEventListener('click', handleCloseEditPopup);
closeAddPopupButton.addEventListener('click', handleCloseAddPopup);
addCardButton.addEventListener('click', handleOpenAddForm);
submitCardButton.addEventListener('submit', handleCardSubmit);
bigPictureClose.addEventListener('click', handleCloseFullScreenPic);
popups.forEach((popup) => {
  popup.addEventListener("mousedown", handleOverlayClick);
});
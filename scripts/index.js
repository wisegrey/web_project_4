// import { reset, settings } from "./validate.js";
import { initialCards } from "./cards.js";

// Let's find the form in the DOM
const popupEditElement = document.querySelector("#popup__edit");
const popupAddElement = document.querySelector("#popup__add");
const formElement = document.querySelector(".popup__form");
const nameForPlaceholder = document.querySelector(".profile__name");
const occupationForPlaceholder = document.querySelector(".profile__occupation");
const editButton = document.querySelector("#profile__edit");
const closeEditPopupButton = popupEditElement.querySelector("#close_edit_profile");
const closeAddPopupButton = popupAddElement.querySelector("#close_add_card");
// const submitProfileButton = document.querySelector("#submitProfileButton");
const submitCardButton = document.querySelector("#addCardForm");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#occupation");
const imagePopup = document.querySelector("#popup__pic");
const cardsContainer = document.querySelector(".elements");
const newCardTemplate = document.querySelector("#newCardTemplate").content;
const addCardButton = document.querySelector(".profile__add");
const bigPicture = document.querySelector(".popup__image-picture");
const bigPictureName = document.querySelector(".popup__image-name");
const bigPictureClose = document.querySelector("#popup__image-close");
const newName = document.querySelector("#title");
const newImage = document.querySelector("#imageUrl");
const popups = document.querySelectorAll(".popup");


// create single card
function createCard(name, image) {
  const newCard = newCardTemplate.querySelector(".element").cloneNode(true);
  const cardName = newCard.querySelector(".element__name");
  const cardImage = newCard.querySelector(".element__image");
  const likeBtn = newCard.querySelector(".element__like");
  const deleteBtn = newCard.querySelector(".element__delete");
  cardName.textContent = name;
  cardImage.src = image;
  cardImage.alt = name;
  cardImage.addEventListener("click", openFullScreenPic);
  likeBtn.addEventListener("click", handleLikeButton);
  deleteBtn.addEventListener("click", handleDeleteButton);
  return newCard;
}

// create initial cards
function populateElements() {
  initialCards.forEach(card => {
    cardsContainer.append(createCard(card.name, card.link));
    // console.log(card.name, card.link);
  });
}
populateElements();

// universal functions to open and close popups respectively
function openPopup(popupName){
  popupName.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscPress);
}

function closePopup(popupName){
  popupName.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscPress);
  // popupName.removeEventListener("click", handleOverlayClick);
}

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

//makes picture popup visible and gives URL for pic and text for description under the pic.
function openFullScreenPic(evt) {
  const imageURL = evt.target.currentSrc;
  const imageTitle = evt.target.alt;
  bigPicture.src = imageURL;
  bigPicture.alt = imageTitle;
  bigPictureName.textContent = imageTitle;
  openPopup(imagePopup);
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

// function to add a single card from inputs in Add "new place"
function handleCardSubmit(evt) {
  evt.preventDefault();
  const newCard = createCard(newName.value, newImage.value);
  cardsContainer.prepend(newCard);
  closePopup(popupAddElement);
}

// to make like-heart icon chamge color after click =)
function handleLikeButton(evt) {
  evt.target.classList.toggle("element__like-active");
}

//obliviously this thing delete card
function handleDeleteButton(evt) {
  evt.target.closest(".element").remove();
}

// close popup after we press Escape button
function handleEscPress(evt) {
  if(evt.code === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
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
  popup.addEventListener("click", handleOverlayClick);
});
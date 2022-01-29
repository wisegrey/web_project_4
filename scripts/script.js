// Let's find the form in the DOM
const popupEditElement = document.querySelector(".popup__edit");
const popupAddElement = document.querySelector(".popup__add");
const formElement = document.querySelector(".popup__form");
const nameForPlaceholder = document.querySelector(".profile__name");
const occupationForPlaceholder = document.querySelector(".profile__occupation");
const editButton = document.querySelector("#profile__edit");
const closeEditPopupButton = popupEditElement.querySelector("#close_edit_profile");
const closeAddPopupButton = popupAddElement.querySelector("#close_add_card");
const submitProfileButton = document.querySelector("#submitProfileButton");
const submitCardButton = document.querySelector("#addCardForm");
const nameInput = document.querySelector("#name");
const jobInput = document.querySelector("#occupation");

const imagePopup = document.querySelector(".popup__pic");
const cardsContainer = document.querySelector(".elements");
const newCardTemplate = document.querySelector("#newCardTemplate").content;

const addCardButton = document.querySelector(".profile__add");

const bigPicture = document.querySelector(".image-popup__picture");
const bigPictureName = document.querySelector(".image-popup__name");
const bigPictureClose = document.querySelector("#image-popup__close");

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
]; 

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
  cardImage.addEventListener("click", fullScreenPic);
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

// function from previous homework. To be deleted/refactored
// function toggleForm() {
//   if (!popupEditElement.classList.contains("popup_opened")) {
//     nameInput.value = nameForPlaceholder.textContent;
//     jobInput.value = occupationForPlaceholder.textContent;
//   }
//   popupElement.classList.toggle("popup_opened");
// }

// next 4 functions names speaks for iselfs =)
function openEditForm() {
  nameInput.value = nameForPlaceholder.textContent;
  jobInput.value = occupationForPlaceholder.textContent;
  popupEditElement.classList.add("popup_opened");
}

function closeEditForm() {
  popupEditElement.classList.remove("popup_opened");
}

function openAddForm() {
  popupAddElement.classList.add("popup_opened");
}

function closeAddForm() {
  popupAddElement.classList.remove("popup_opened");
}

// to take name/occupation from profile. To be refactored
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameForPlaceholder.textContent = nameInput.value;
  occupationForPlaceholder.textContent = jobInput.value;
  closeEditForm();
}

// function to add a single card from inputs in Add "new place"
function handleCardSubmit(evt) {
  evt.preventDefault();
  const newName = document.querySelector("#title");
  const newImage = document.querySelector("#imageUrl");
  const newCard = createCard(newName.value, newImage.value);
  cardsContainer.prepend(newCard);
  closeAddForm();
}

// to make like-heart icon chamge color after click =)
function handleLikeButton(evt) {
  evt.target.classList.toggle("element__like-active");
}

//obliviously this thing delete card
function handleDeleteButton(evt) {
  evt.target.closest(".element").remove();
}

//makes picture popup visible and gives URL for pic and text for description under the pic.
function fullScreenPic(evt) {
  const imageURL = evt.target.currentSrc;
  const imageTitle = evt.target.alt;
  bigPicture.src = imageURL;
  bigPicture.alt = imageTitle;
  bigPictureName.textContent = imageTitle;
  imagePopup.classList.add("popup_opened");
}

// close/makes inviseble picture popup
function closeFullScreenPic(){
  imagePopup.classList.remove("popup_opened");
}

// event listeners
formElement.addEventListener('submit', handleProfileFormSubmit);
editButton.addEventListener('click', openEditForm);
closeEditPopupButton.addEventListener('click', closeEditForm);
closeAddPopupButton.addEventListener('click', closeAddForm);
addCardButton.addEventListener('click', openAddForm);
submitCardButton.addEventListener('submit', handleCardSubmit);
bigPictureClose.addEventListener('click', closeFullScreenPic);
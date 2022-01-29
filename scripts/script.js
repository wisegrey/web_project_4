// Let's find the form in the DOM
let popupEditElement = document.querySelector(".popup__edit");
let popupAddElement = document.querySelector(".popup__add");
let formElement = document.querySelector(".popup__form");
let nameForPlaceholder = document.querySelector(".profile__name");
let occupationForPlaceholder = document.querySelector(".profile__occupation");
let editButton = document.querySelector("#profile__edit");
let closeEditPopupButton = popupEditElement.querySelector("#close_edit_profile");
let closeAddPopupButton = popupAddElement.querySelector("#close_add_card");
let submitProfileButton = document.querySelector("#submitProfileButton");
let submitCardButton = document.querySelector("#addCardForm");
let nameInput = document.querySelector("#name");
let jobInput = document.querySelector("#occupation");

let imagePopup = document.querySelector(".image-popup");
let imagePopupBackground = imagePopup.querySelector(".image-popup__background");
let imagePopupCloseBtn = imagePopup.querySelector(".image-popup__close");
let cardsContainer = document.querySelector(".elements");
let newCardTemplate = document.querySelector("#newCardTemplate").content;

let addCardButton = document.querySelector(".profile__add");

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
  cardName.textContent = name;
  cardImage.src = image;
  cardImage.alt = name;
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

function handleCardSubmit(evt) {
  evt.preventDefault();
  const newName = document.querySelector("#title");
  const newImage = document.querySelector("#imageUrl");
  const newCard = createCard(newName.value, newImage.value);
  cardsContainer.prepend(newCard);
  closeAddForm();
}


// event listeners
formElement.addEventListener('submit', handleProfileFormSubmit);
editButton.addEventListener('click', openEditForm);
closeEditPopupButton.addEventListener('click', closeEditForm);
closeAddPopupButton.addEventListener('click', closeAddForm);
addCardButton.addEventListener('click', openAddForm);
submitCardButton.addEventListener('submit', handleCardSubmit);




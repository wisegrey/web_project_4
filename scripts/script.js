// Let's find the form in the DOM
let popupElement = document.querySelector(".popup");
let formElement = document.querySelector(".popup__form");
let nameForPlaceholder = document.querySelector(".profile__name");
let occupationForPlaceholder = document.querySelector(".profile__occupation");
let editButton = document.querySelector("#profile__edit");
let closeButton = popupElement.querySelector("#close");
let submitButton = document.querySelector("#submitButton");
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
function toggleForm() {
  if (!popupElement.classList.contains("popup_opened")) {
    nameInput.value = nameForPlaceholder.textContent;
    jobInput.value = occupationForPlaceholder.textContent;
  }
  popupElement.classList.toggle("popup_opened");
}

// to take name/occupation from profile. To be refactored
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameForPlaceholder.textContent = nameInput.value;
  occupationForPlaceholder.textContent = jobInput.value;
  toggleForm();
}

// event listeners
formElement.addEventListener('submit', handleProfileFormSubmit);
editButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);
addCardButton.addEventListener('click', );




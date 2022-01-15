// Let's find the form in the DOM
let formElement = document.querySelector(".popup");   
let nameForPlaceholder = document.querySelector(".profile__name");
let occupationForPlaceholder = document.querySelector(".profile__occupation");
let editButton = document.querySelector("#profile__edit");
let closeButton = document.querySelector("#close");
let submitButton = document.querySelector("#submitButton");
let nameInput = document.querySelector("#name");  
let jobInput = document.querySelector("#occupation");

// Next is the form submit handler, though
// it won't submit anywhere just yet
function toggleForm(){
    if (!formElement.classList.contains("popup__opened")){
         nameInput.value = nameForPlaceholder.textContent;
         jobInput.value = occupationForPlaceholder.textContent;
       }
    formElement.classList.toggle("popup__opened");
}

// Note that the function name starts with a verb
// and describes exactly what the function does
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameForPlaceholder.textContent = nameInput.value;
  occupationForPlaceholder.textContent = jobInput.value;
  toggleForm();
}

// Connect the handler to the form:
// it will watch the submit event
formElement.addEventListener('submit', handleProfileFormSubmit);
editButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);
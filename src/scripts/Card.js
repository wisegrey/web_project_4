//import { openPopup } from "./utils.js";
const bigPicture = document.querySelector(".popup__image-picture");
const bigPictureName = document.querySelector(".popup__image-name");
const imagePopup = document.querySelector("#popup__pic");


class Card {
    constructor(data, handleCardClick, template) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._template = template;
        this._card = this._getTemplate();
        this._likeButton = this._card.querySelector(".element__like");
        this._cardImage = this._card.querySelector(".element__image");
        this._deleteButton = this._card.querySelector(".element__delete");
        this._text = this._card.querySelector(".element__textarea");
    }

    _getTemplate() {
        return this._cardElement = document.querySelector(this._template).content.querySelector(".element").cloneNode(true);
    }

    // _openFullScreenPic = () => {
    //     bigPicture.src = this._image;
    //     bigPicture.alt = this._text;
    //     bigPictureName.textContent = this._text;
    //     openPopup(imagePopup);
    // };

    //obliviously this thing delete card
    _handleDeleteButton() {
        this._cardElement.remove();
    };

    // to make like-heart icon chamge color after click =)
    _handleLikeButton() {
        this._cardElement.querySelector(".element__like").classList.toggle("element__like-active");
    };
  
  

    // attach event-listeners to newly created card
    _addEventListeneres() {
        this._cardElement.querySelector(".element__image").addEventListener("click", this._handleCardClick);
        this._cardElement.querySelector(".element__like").addEventListener("click", this._handleLikeButton);
        this._cardElement.querySelector(".element__delete").addEventListener("click", this._handleDeleteButton);
    };

    // create exemplar of card
    createCard() {
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._text.text = this._name;
        this._addEventListeners();

        return this._card;
    };

}

export default Card;
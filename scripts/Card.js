import { openPopup } from "./utils.js";
const bigPicture = document.querySelector(".popup__image-picture");
const bigPictureName = document.querySelector(".popup__image-name");


class Card {
    constructor(data, template) {
        this._text = data.name;
        this._image = data.link;
        this._template = template;
    }

    _getTemplate() {
        const cardElement = document.querySelector(this._template).content.querySelector(".element").cloneNode(true);
        return cardElement;
    }

    _openFullScreenPic() {
        bigPicture.src = this._image;
        bigPicture.alt = this._text;
        bigPictureName.textContent = this._text;
        openPopup(imagePopup);
    }

    // to make like-heart icon chamge color after click =)
    _handleLikeButton() {
        this._card.querySelector(".element__like").classList.toggle("element__like-active");
    }
  
  //obliviously this thing delete card
    _handleDeleteButton() {
        this._card.remove();
    }

    // attach event-listeners to newly created card
    _addEventListeneres() {
        this._card.querySelector(".element__image").addEventListener("click", this._openFullScreenPic);
        this._card.querySelector(".element__like").addEventListener("click", this._handleLikeButton);
        this._card.querySelector(".element__delete").addEventListener("click", this._handleDeleteButton);
    }

    // create exemplar of card
    createCard() {
        this._card = this._getTemplate();
        this._card.querySelector(".element__name").textContent = this._text;
        this._card.querySelector(".element__image").src = this._image;
        this._card.querySelector(".element__image").alt = this._text;
        
        return this._card;
    }

}

export default Card;
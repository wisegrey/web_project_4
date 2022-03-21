import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popup) {
        super(popup);
        this._name = this._popup.querySelector(".popup__image-name");
        this._image = this._popup.querySelector(".popup__image-picture");
    }

    open({ link, name }) {
        this._image.src = link;
        this._image.alt = name;
        this._name.textContent = name;
        super.open(); 
    }
}
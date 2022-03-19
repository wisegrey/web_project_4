export default class Popup {
    constructor(popup) {
        this._popup = popup;
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", handleEscPress);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", handleEscPress);
    }

    _handleEscClose() {

    }

    setEventListeners() {

    }
}
export default class Popup {
    constructor(popup) {
        this._popup = popup;
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscPress);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscPress);
    }

    _handleEscClose(evt) {
        if(evt.code === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener("mousedown", (evt) => {
            if (evt.target.classList.contains("popup_opened")) {
              this.close();
            }
          });
    }
}
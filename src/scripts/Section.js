export default class Section {
    constructor({items, renderer}, container){
        this._items = items;
        this._renderer = renderer;
        this._container = container;
    }

    renderer() {
        this._items.forEach((item) => this._renderer(item));
    }

    addItem(card) {
        this._container.prepend(card);
    }
}
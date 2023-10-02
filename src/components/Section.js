export default class Section{
  constructor({data, renderer}, containerSelector){
    this._renderedItems = data;
    this._container = document.querySelector(containerSelector);
    this.renderer = renderer;
  }

  addItem(element){
    this._container.prepend(element);
  }
  
  renderItems() {
    this._renderedItems.forEach((item) => {
      const card = this.renderer(item);
      this.addItem(card);
    });
  }
}
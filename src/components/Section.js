export default class Section{
  constructor({renderer}, containerSelector){
    this._container = document.querySelector(containerSelector);
    this.renderer = renderer;
  }

  addItem(element){
    this._container.prepend(element);
  }
  
  renderItems(items) {
    items.forEach((item) => {
      this.renderer(item);
      
    });
  }
}
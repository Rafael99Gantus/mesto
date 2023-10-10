export class Card{
  constructor(data, templateSelector, handleOpenPopup, {setLike}, {deleteLike}, userId, handleOpenTrashPopup) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._handleOpenPopup = handleOpenPopup;
    this._setLike = setLike;
    this._deleteLike = deleteLike;
    this._userId=userId;
    this._owner = data.owner;
    // this._numberlike = numberlike;
    this._id = data._id;
    this._handleOpenTrashPopup = handleOpenTrashPopup;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const card = document.querySelector(this._templateSelector).content.querySelector('.elements__element').cloneNode(true);

    

    return card;
  }

  

  generateCard() {
    this._element = this._getTemplate();
    this._likeIcon = this._element.querySelector('#first-heart');
    this._trashIcon = this._element.querySelector('.elements__trash');
    this._trashButton = this._element.querySelector('#buttonAnswer');
    this._trashPopup = document.querySelector('#answerPopup');
    this._imageCard = this._element.querySelector('.elements__image');
    this._nameCard = this._element.querySelector('.elements__name');
    // this._popupImage = document.querySelector('.popup__image');
    this._popupTitle = document.querySelector('.popup__titleImage');
    this._numberLikes = this._element.querySelector('.elements__number');
    this._avatar = document.querySelector('#editAvatar');
    this._avatarEdit = document.querySelector('.profile__overlay');
    this._deleteCard = this._element.querySelector('#buttonAnswer')
    // this.numberLike(this._data);
    this._setEventListeners();

    
    this._nameCard.textContent = this._name;
    const cardImage = this._imageCard;
    cardImage.src = this._link;
    cardImage.alt = this._name;
    this._numberLikes.textContent = this._likes.length;
    this._likes.forEach(like=>{
      if(like._id===this._userId){
        this._likeIcon.classList.add('elements__heart_active')
      }
    })

    // const icon = this._element.querySelector('.elements__trash');
    //     if (this._owner._id !== this._userId) {
    //       icon.style.display = 'none';
    //     }
    return this._element;
  }

  _setEventListeners() {

    this._likeIcon.addEventListener('click', () => {
      if(this._likeIcon.classList.contains('elements__heart_active')){
        this._deleteLike(this._id)
      }else{
        this._setLike(this._id) 
      }
    });

    const icon = this._element.querySelector('.elements__trash');
    icon.addEventListener('click', () => {
      this._handleOpenTrashPopup();
    });

    this._imageCard.addEventListener('click', () => {
      this._handleOpenPopup(this._name, this._link);
    });
  }
// Лайк
  handleLike() {
    const likeIcon = this._element.querySelector('#first-heart');
    likeIcon.classList.add('elements__heart_active');
  };

  delLike() {
    const likeIcon = this._element.querySelector('#first-heart');
    likeIcon.classList.remove('elements__heart_active');
  };

  numberLike(data) {
    this._likes = data.likes
    this._numberLikes.textContent = this._likes.length;

}

  delete () {
    this._element.remove();
  }


}
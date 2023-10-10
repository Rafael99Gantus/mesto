export default class UserInfo{
    constructor(elForInfo){
        this._name = document.querySelector(elForInfo.name);
        this._work = document.querySelector(elForInfo.work);
        this._avatar = document.querySelector(elForInfo.avatar);
    }

    getUserInfo(){ // Нужен при открытии формы
        return {
            name: this._name.textContent, 
            work: this._work.textContent
        }
    }

    setUserInfo({name, about, avatar, _id}) {
        this._name.textContent = name;
        this._work.textContent = about;
        this._avatar.src = avatar;
        this.userId = _id;
    }

    setUserName({name, work}){
        this._name.textContent = name;
        this._work.textContent = work;
    }

    setUserAvatar({avatar}){
        this._avatar.src = avatar;
    }
}

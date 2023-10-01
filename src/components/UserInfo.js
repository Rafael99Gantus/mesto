export default class UserInfo{
    constructor(elForInfo){
        this._name = document.querySelector(elForInfo.name);
        this._work = document.querySelector(elForInfo.work);
    }

    getUserInfo(){ // Нужен при открытии формы
        return {
            name: this._name.textContent, 
            work: this._work.textContent
        }
    }

    setUserInfo({name, work}) {
        this._name.textContent = name;
        this._work.textContent = work;
    }
}

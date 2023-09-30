export default class UserInfo{
    constructor(name, work){
        this._name = name;
        this._work = work;
    }

    getUserInfo(){ // Нужен при открытии формы
        this._UserInfo = {
            name: this._name.textContent,
            work: this._work.textContent
        };
        return this._UserInfo
    }

    setUserInfo({name, work}) {
        this._name.textContent = name;
        this._work.textContent = work;
    }
}

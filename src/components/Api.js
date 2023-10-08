export class Api {
    constructor({ url, headers }) {
        this._url = url;
        this._headers = headers;
    }

    _getRequest (url, options) {
        return fetch(url, options)
        .then((response) => {
            if(response.ok) {
                return response.json()
            }

            throw new Error('Что-то пошло не так...')
        })
    }

    getAllCards() {
        return this._getRequest(`${this._url}/cards`, {
            method: 'GET',
            headers: this._headers
        })
    }

    createCardInServ(data) {
        return this._getRequest(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
    }

    deleteCard(id) {
        return this._getRequest(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
    }

    getInfo () {
        return this._getRequest (`${this._url}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
    }

    saveInfoInServ(info){
        return this._getRequest (`${this._url}/users/me`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({ 
            name: info.name, 
            about: info.work 
          })
      })
    }

    saveAvatarInServ(info){
        return this._getRequest (`${this._url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({ 
            avatar: info.avatar
          })
      })
    }
}
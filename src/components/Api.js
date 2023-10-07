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
            // .then((res) => {
            //     if (res.ok) {
            //         return res.json()
            //     }
            // })
            // // .then((res) => {
            // //     res.forEach(((item) => {
            // //         this._fanction(item);
            // //     }));
            // // })
            // .then(() => {
            //     console.log('Загрузка данных КАРТОЧЕК')
            // })
            // .catch((err) => {
            //     console.log(`Может не стоит ? Это ${err}`)
            // });
    }

    createCard(data) {
        return this._getRequest(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
            })
    }

    numberLikes(data) {
        return this._getRequest(`${this._url}/cards`, {
            headers: this._headers
        })
            // .then((res)=>{
            //     // data.textContent = Object.keys(res.likes).length
            //     console.log(res.likes)
            //   })
            .catch((err) => {
                console.log(`You are wellcome ${err}`)
            })
    }

    deleteCard(id) {
        return this._getRequest(`${this._url}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })
    }
}
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
        .catch((error) => {
            console.log(error);
        });
    }

    getAllCards() {
        return this._getRequest(`https://mesto.nomoreparties.co/v1/cohort-76/cards`, {
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
        fetch('https://mesto.nomoreparties.co/v1/cohort-76/cards', {
            method: 'POST',
            headers: {
                authorization: '201e26a5-d782-4c58-9b61-1aee30a7887d',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
            })
            .catch((err) => {
                console.log(`You are wellcome ${err}`)
            })
    }

    numberLikes(data) {
        fetch('https://mesto.nomoreparties.co/v1/cohort-76/cards', {
            headers: {
                authorization: '201e26a5-d782-4c58-9b61-1aee30a7887d'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
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
        fetch(`https://mesto.nomoreparties.co/v1/cohort-76/cards/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: '201e26a5-d782-4c58-9b61-1aee30a7887d'
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                }
            })
            // .then((res)=>{
            //     console.log(res)
            //   })
            .then(() => {
                console.log('Удалилось')
            })
            .catch((err) => {
                console.log(`Может не стоит ? Это ${err}`)
            });
    }
}
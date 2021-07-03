import Cookies from 'js-cookie'

export default class Interface {
    constructor(options) {
        this.options = Object.assign({}, {
            namespace: '',
            storage: 'local'
        }, options)

        Object.defineProperty(this, 'length', {
            get() {
                return Object.keys(this.storage.get()).length
            }
        })

        let storage = null

        switch (this.options.storage) {
            case 'local':
                storage = 'localStorage' in window
                    ? window.localStorage
                    : null
                break
            case 'session':
                storage = 'sessionStorage' in window
                    ? window.sessionStorage
                    : null
                break
            case 'cookie':
                storage = Cookies
        }

        this.storage = storage
    }

    set() {
    }

    get() {
    }

    remove() {
    }

    clear() {
    }
}

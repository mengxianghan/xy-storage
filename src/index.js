import Cookie from './Cookie'
import WebStorage from './WebStorage'

export default class Storage {
    constructor(options = {}) {
        this.local = new WebStorage(Object.assign({}, options, {storage: 'local'}))
        this.session = new WebStorage(Object.assign({}, options, {storage: 'session'}))
        this.cookie = new Cookie(Object.assign({}, options, {storage: 'cookie'}))
    }
}

import { isNumber, isDate, isCookie } from './utils'

import Cookies from 'js-cookie'

export default class Storage {
    #storage
    #opts

    constructor(options) {
        this.#opts = {
            name: 'local',
            namespace: '',
            attrs: null,
            ...options,
        }

        this.#storage = this.#getStorage(this.#opts.name)
    }

    set(key, value, attrs = null) {
        attrs = { ...(this.#opts?.attrs ?? {}), ...(attrs ?? {}) }

        if (isCookie(this.#opts.name)) {
            this.#storage.set(this.#getKey(key), JSON.stringify({ value }), attrs)
        } else {
            let { expires } = attrs
            let date = null
            let exp = null

            if (expires) {
                // 有效期为数字
                if (isNumber(expires)) {
                    date = new Date()
                    date.setDate(date.getDate() + expires)
                    exp = new Date(date)
                }
                // 有效期为日期对象
                if (isDate(expires)) {
                    exp = expires
                }
            }

            value = JSON.stringify({
                value,
                expires: exp,
            })

            this.#storage.setItem(this.#getKey(key), value)
        }
    }

    get(key, def = null) {
        let data

        if (isCookie(this.#opts.name)) {
            data = this.#storage.get(this.#getKey(key))

            if ('' !== data && 'undefined' !== typeof data) {
                return JSON.parse(data)?.value ?? def
            } else {
                return def
            }
        } else {
            data = JSON.parse(this.#storage.getItem(this.#getKey(key)) || '{}')

            // 永久有效
            if (null === data?.expires || new Date(data?.expires).getTime() >= new Date().getTime()) {
                return data?.value
            }

            // 已失效，执行清理
            this.remove(key)

            // 返回默认值
            return def
        }
    }

    remove(key, attrs = null) {
        if (isCookie(this.#opts.name)) {
            return this.#storage.remove(this.#getKey(key), { ...(this.#opts?.attrs ?? {}), ...(attrs ?? {}) })
        } else {
            return this.#storage.removeItem(this.#getKey(key))
        }
    }

    clear() {
        if (isCookie(this.#opts.name)) {
            console.error('Cookies do not support clear')
            return
        }

        const len = this.#storage.length ?? 0

        if (len === 0) return

        const keys = []

        for (let i = 0; i < len; i++) {
            const name = this.#storage.key(i)
            const regexp = new RegExp(`^${this.#opts.namespace}(.+)`, 'i')

            if (regexp.test(name) === false) {
                continue
            }
            const [_, key] = name.match(regexp)
            keys.push(key)
        }

        for (const key in keys) {
            this.remove(keys[key])
        }
    }

    #getStorage(name) {
        const storages = new Map()
        storages.set('local', localStorage)
        storages.set('session', sessionStorage)
        storages.set('cookie', Cookies)

        return storages.get(name)
    }

    #getKey(key) {
        return `${this.#opts.namespace}${key}`
    }
}

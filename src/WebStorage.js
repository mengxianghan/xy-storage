import Interface from './Interface'

export default class WebStorage extends Interface {
    constructor(options) {
        super(options)
    }

    /**
     * Set
     * @param {string} name
     * @param {*} value
     * @param {object} attrs
     * {
     *     @param {number | date} expires 过期时间
     * }
     */
    set(name, value, attrs = null) {
        const {expires} = attrs || {}
        let dateTime = null

        if (expires) {
            // 数字
            if (typeof expires === 'number') {
                dateTime = new Date()
                dateTime.setDate(dateTime.getDate() + expires)
                dateTime = new Date(dateTime)
            }
            // 时间对象
            if (typeof expires === 'object') {
                dateTime = expires
            }
        }

        const stringifyValue = JSON.stringify({
            value,
            expires: dateTime || null
        })
        this.storage.setItem(this.options.namespace + name, stringifyValue)
    }

    /**
     * Get
     * @param {string} name
     * @param {*} def 默认为空，如果没有设置名称则返回
     * @return {null|*}
     */
    get(name, def = null) {
        const item = this.storage.getItem(this.options.namespace + name)

        if (item !== null) {
            try {
                const data = JSON.parse(item)

                if (data.expires === null) {
                    return data.value
                }

                if (new Date(data.expires).getTime() >= new Date().getTime()) {
                    return data.value
                }

                this.remove(name)
            } catch (err) {
                return def
            }
        }

        return def
    }

    /**
     * Remove
     * @param name
     * @return {*}
     */
    remove(name) {
        return this.storage.removeItem(this.options.namespace + name)
    }

    /**
     * clear
     */
    clear() {
        if (this.length === 0) {
            return
        }

        const removedKeys = []

        for (let i = 0; i < this.length; i++) {
            const key = this.storage.key(i)
            const regexp = new RegExp(`^${this.options.namespace}.+`, 'i')

            if (regexp.test(key) === false) {
                continue
            }

            removedKeys.push(key)
        }

        for (const key in removedKeys) {
            this.storage.removeItem(removedKeys[key])
        }
    }
}

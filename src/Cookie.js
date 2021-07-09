import Interface from './Interface'

export default class Cookie extends Interface {
    constructor(options) {
        super(options)
    }

    /**
     * Set
     * @param {string} name
     * @param {*} value
     * @param {object} attrs
     */
    set(name, value, attrs = null) {
        this.storage.set(this.options.namespace + name, JSON.stringify({value}), attrs)
    }

    /**
     * Get
     * @param {string} name
     * @param {*} def 默认为空，如果没有设置名称则返回
     * @return {null|*}
     */
    get(name, def = null) {
        const value = this.storage.get(this.options.namespace + name)
        return (value !== '' && typeof value !== 'undefined') ? (JSON.parse(value)?.value ?? def) : def
    }

    /**
     * Remove
     * @param {string} name
     * @param {object} attrs
     * @return {*}
     */
    remove(name, attrs = null) {
        return this.storage.remove(this.options.namespace + name, attrs)
    }

    /**
     * Clear
     * @param {object} attrs
     */
    clear(attrs = {}) {
        if (this.length === 0) {
            return
        }
        const removedKeys = []
        for (let i = 0; i < this.length; i++) {
            const key = Object.keys(this.storage.get())[i]
            const regexp = new RegExp(`^${this.options.namespace}.+`, 'i')

            if (regexp.test(key) === false) {
                continue
            }
            removedKeys.push(key)
        }
        for (const key in removedKeys) {
            this.storage.remove(removedKeys[key], attrs)
        }
    }
}

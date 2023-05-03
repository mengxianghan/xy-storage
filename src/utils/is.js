/**
 * 是否数字
 * @param {*} value
 * @returns
 */
export const isNumber = (value) => '[object Number]' === Object.prototype.toString.call(value)

/**
 * 是否对象
 * @param {*} value
 * @returns
 */
export const isObject = (value) => '[object Object]' === Object.prototype.toString.call(value)

/**
 * 是否日期对象
 * @param {*} value
 * @returns
 */
export const isDate = (value) => '[object Date]' === Object.prototype.toString.call(value)

/**
 * 是否 local
 * @param {*} value
 * @returns
 */
export const isLocal = (value) => 'local' === value

/**
 * 是否 session
 * @param {*} value
 * @returns
 */
export const isSession = (value) => 'session' === value

/**
 * 是否 cookie
 * @param {*} value
 * @returns
 */
export const isCookie = (value) => 'cookie' === value

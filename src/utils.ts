export const assign = (target: unknown, source: unknown) => Object.assign({}, target, source)

export const isNumber = (value: unknown): value is number => Object.prototype.toString.call(value) === '[object Number]'

export const isDate = (value: unknown): value is Date => Object.prototype.toString.call(value) === '[object Date]'

export const isEmpty = (value: unknown): value is '' | undefined | null => value === '' || value === undefined || value === null

export const isDef = (value: unknown) => value !== undefined && value !== null

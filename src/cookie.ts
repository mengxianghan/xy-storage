import type { CookieAttrs, CookieOptions } from './types'
import Cookies from 'js-cookie'
import { BaseStorage } from './base-storage'
import { assign } from './utils'

class Cookie extends BaseStorage<CookieOptions> {
  constructor(options: CookieOptions) {
    super(options)
  }

  setItem(
    name: string,
    value: any,
    attrs?: CookieAttrs,
  ) {
    Cookies.set(
      this.generateKey(name),
      JSON.stringify({ value }),
      attrs || {},
    )
  }

  getItem(
    name: string,
    defaultValue?: any,
  ) {
    const value = Cookies.get(this.generateKey(name))

    if (value !== '' && typeof value !== 'undefined') {
      return JSON.parse(value)?.value ?? defaultValue
    }

    return defaultValue
  }

  removeItem(
    name: string,
    attrs?: CookieAttrs,
  ) {
    Cookies.remove(
      this.generateKey(name),
      assign(this.options.attrs || {}, attrs || {}),
    )
  }
}

export function createCookie(options: CookieOptions) {
  const instance = new Cookie(options)

  return {
    setItem: instance.setItem.bind(instance),
    getItem: instance.getItem.bind(instance),
    removeItem: instance.removeItem.bind(instance),
  }
}

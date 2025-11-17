import type { LocalStorageOptions, SessionStorageOptions, WebStorageAttrs, WebStorageOptions } from './types'
import { BaseStorage } from './base-storage'
import { assign, isDate, isNumber } from './utils'

class WebStorage extends BaseStorage<WebStorageOptions> {
  constructor(options: WebStorageOptions) {
    super(options)
  }

  setItem(
    name: string,
    value: any,
    attrs?: WebStorageAttrs,
  ) {
    attrs = assign(this.options?.attrs || {}, attrs || {})
    const { expires } = attrs || {}
    let date = null
    let exp = null

    if (expires) {
      if (isNumber(expires)) {
        date = new Date()
        date.setDate(date.getDate() + expires)
        exp = new Date(date)
      }
      if (isDate(expires)) {
        exp = expires
      }
    }

    this.options.storage.setItem(
      this.generateKey(name),
      JSON.stringify({
        value,
        expires: exp,
      }),
    )
  }

  getItem(name: string, defaultValue?: any) {
    const data = JSON.parse(this.options.storage.getItem(this.generateKey(name)) || '{}')

    if (data?.expires === null || new Date(data?.expires).getTime() >= new Date().getTime()) {
      return data?.value
    }

    this.removeItem(name)

    return defaultValue
  }

  removeItem(name: string) {
    this.options.storage.removeItem(
      this.generateKey(name),
    )
  }

  clear() {
    this.options.storage.clear()
  }
}

function createStorage(options: WebStorageOptions) {
  const instance = new WebStorage(options)

  return {
    setItem: instance.setItem.bind(instance),
    getItem: instance.getItem.bind(instance),
    removeItem: instance.removeItem.bind(instance),
    clear: instance.clear.bind(instance),
  }
}

export function createLocalStorage(options: LocalStorageOptions) {
  return createStorage({
    ...options,
    storage: window.localStorage,
  })
}

export function createSessionStorage(options: SessionStorageOptions) {
  return createStorage({
    ...options,
    storage: window.sessionStorage,
  })
}

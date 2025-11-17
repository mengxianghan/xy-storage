export interface WebStorageAttrs {
  /**
   * 如果是数字，单位：天
   */
  expires?: number | Date
}

export interface CookieAttrs extends Cookies.CookieAttributes {}

export interface BaseStorageOptions {
  namespace: string
}

export interface WebStorageOptions extends BaseStorageOptions {
  storage: Storage
  attrs?: WebStorageAttrs
}

export interface CookieOptions extends BaseStorageOptions {
  attrs?: CookieAttrs
}

export interface LocalStorageOptions extends BaseStorageOptions {
  attrs?: WebStorageAttrs
}

export interface SessionStorageOptions extends BaseStorageOptions {
  attrs?: WebStorageAttrs
}

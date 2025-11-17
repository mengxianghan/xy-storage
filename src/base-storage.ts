import type { BaseStorageOptions } from './types'

export class BaseStorage<T extends BaseStorageOptions> {
  protected options: T

  constructor(options: T) {
    this.options = options
  }

  protected generateKey(key: string) {
    const { namespace } = this.options

    return `${namespace}${key}`
  }
}

import { describe, expect, it } from 'vitest'
import { createLocalStorage } from '../src'

const storage = createLocalStorage({
  namespace: 'test_',
})

describe('测试 localStorage', () => {
  it('设置: string', () => {
    storage.setItem('name', 'test')
    expect(storage.getItem('name')).toBe('test')
  })

  it('获取', () => {
    const value = storage.getItem('name')
    expect(value).toBe('test')
  })

  it('删除', () => {
    storage.removeItem('name')
    expect(storage.getItem('name')).toBe(undefined)
  })

  it('设置: expires', () => {
    storage.setItem('expires', 'test', {
      expires: 1,
    })
    expect(storage.getItem('expires')).toBe('test')
  })

  it('默认值: string', () => {
    expect(storage.getItem('default-value', 'default')).toBe('default')
  })

  it('默认值: boolean', () => {
    expect(storage.getItem('default-value', true)).toBeTruthy()
  })

  it('默认值: object', () => {
    expect(storage.getItem('default-value', { a: 1 })).toEqual({ a: 1 })
  })

  it('设置: number', () => {
    storage.setItem('number', 1)
    expect(storage.getItem('number')).toBe(1)
  })

  it('设置: boolean', () => {
    storage.setItem('boolean', true)
    expect(storage.getItem('boolean')).toBeTruthy()
  })

  it('设置: object', () => {
    storage.setItem('object', { a: 1 })
    expect(storage.getItem('object')).toEqual({ a: 1 })
  })
})

# xy-storage

基于 `localStoage` `sessionStorage` `js-cookie` 的本地缓存

## 安装

如果使用 `cookie`，需要安装 `js-cookie`

1. NPM 方式（推荐）

```shell
pnpm add xy-storage js-cookie
```

2. CDN 方式

```html
<script src="https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/xy-storage/dist/index.global.js"></script>
```

## 使用方法

### 1. 导入函数

```typescript
import {
  createCookie, 
  createLocalStorage, 
  createSessionStorage
} from "xy-storage";
```

### 2. 创建实例

```typescript
const cookie = createCookie({
  namespace: 'example_',
  attrs: {
    expires: 7,
    path: '',
    domain: 'example.com',
    sameSite: 'strict',
  }
})

const local = createLocalStorage({
  namespace: 'example_',
  attrs: {
    expires: 7,
  }
})

const session = createSessionStorage({
  namespace: 'example_'
})
```

### 3. 使用

#### setItem

设置缓存

```typescript
cookie.setItem(
  'test',
  1,
  {
    expires: 7,
    domain: 'example.com',
  }
)

local.setItem(
  'test', 
  2,
  {
    expires: 7,
  }
)

session.setItem('test', 3)
```

#### getItem

获取缓存

```typescript
cookie.getItem('test') // 1

local.getItem('test') // 2

session.getItem('test') // 3
```

#### removeItem

删除缓存

```typescript
cookie.removeItem('test')

local.removeItem('test')

session.removeItem('test')
```

#### clear

清空缓存，`cookie` 不支持 `clear` 方法

```typescript
local.clear()

session.clear()
```

## API 文档

### 创建函数

#### createCookie

```typescript
declare function createCookie(
  options: CookieOptions,
)
```

- options: 配置
  - namespace: 命名空间
  - attrs: 属性
    - expires: 过期时间
    - path: 路径
    - domain: 域
    - sameSite: 同域
- 更多参数，请查看 [js-cookie](https://www.npmjs.com/package/js-cookie)

#### createLocalStorage

```typescript
declare function createLocalStorage(
  options: LocalStorageOptions
)
```

- options: 配置
  - namespace: 命名空间
  - attrs: 属性
    - expires: 过期时间

#### createSessionStorage

```typescript
declare function createSessionStorage(
  options: SessionStorageOptions
)
```

- options: 配置
    - namespace: 命名空间
    - attrs: 属性
        - expires: 过期时间

### 方法

#### setItem
```text
setItem(
  name: string,
  value: any,
  attrs?: CookieAttrs | WebStorageAttrs
)
```
- name: 键
- value: 值
- attrs: 属性，可选

#### getItem

```text
getItem(
  name: string,
  defaultValue?: any
): any
```
- name: 键
- defaultValue: 未获取到值时的返回值，可选

#### removeItem
```text
removeItem(name: string)
```
- name: 键

#### clear
```text
clear()
```
删除所有缓存，仅适用于 `local` 和 `session`

## 类型定义

```typescript
import type {
  BaseStorageOptions, 
  CookieAttrs, 
  CookieOptions, 
  LocalStorageOptions, 
  SessionStorageOptions, 
  WebStorageAttrs, 
  WebStorageOptions
} from 'xy-storage'
```

## 依赖

[js-cookie](https://www.npmjs.com/package/js-cookie)

## 参考文档

[js-cookie](https://www.npmjs.com/package/js-cookie)

[sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)

[localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)


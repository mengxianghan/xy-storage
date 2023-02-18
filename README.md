## 安装

### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/js-cookie@{version}/src/js.cookie.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/xy-storage@{version}/dist/index.umd.min.js"></script>
```

### NPM

```shell
npm instll -S js-cookie xy-storage
```

## 使用

```javascript
import Storage from 'xy-storage'

// localStorage
const localStore = new Storage({
    name:'local',
    attrs:{
        expires: 1000
    }
})

// sessionStorage
const sessionStore = new Storage({
    name: 'session'
})

// cookie
const cookieStore = new Storage({
    name: 'cookie',
    attrs:{
        expires: 1000,
        path: '',
        domain: '',
        secure: false
    }
})

// localStorage
localStore.set('name', 'value' [,{expires: 1000}])
localStore.get('name'[, 'default'])
localStore.remove('name')
localStore.clear()

// sessionStorage
sessionStore.set('name', 'value')
sessionStore.get('name'[, 'default'])
sessionStore.remove('name')
sessionStore.clear()

// cookie
cookieStore.set('name', 'value'[, {expires: 1000, path: '', domain: 'subdomain.site.com', secure: true}])
cookieStore.get('name'[, 'default'])
cookieStore.remove('name'[, {}])
```

## API
### 配置

| 属性 | 必填 | 说明 | 类型 | 默认值 | 适用范围 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| namespace | 否 | 命名空间，添加到 name 前，防止多项目储存名冲突 | string | - | local、session、cookie |
| name | 否 | 储存方式 | string | - | local、session、cookie，默认：local，可选：local、session、cookie |
| value | 否 | 储存内容 | string、object、boolean | - | local、session、cookie |
| default | 否 | 未获取到值时的返回值 | string、object、boolean | null | local、session、cookie |
| attrs | 否 | 附加属性 | object | - | local、cookie |
| attrs.expires | 否 | 有效期，适用范围：local，cookie | number、date | - | local、cookie |
| attrs.path | 否 | 储存路径，适用范围：cookie | string | - | cookie |
| attrs.domain | 否 | 域名，适用范围：cookie | string | - | cookie |
| attrs.secure | 否 | 是否需要安全协议，适用范围：cookie | boolean | false  | cookie |

### set、get、remove
| 属性 | 必填 | 说明 | 类型 | 默认值 | 适用范围 |
| :---- | :---- | :---- | :---- | :---- | :---- |
| name | 否 | 储存内容名称 | string | - | set、get、remove |
| value | 否 | 储存内容 | string、object、boolean | - | set |
| default | 否 | 未获取到值时的返回值 | string、object、boolean | null | get |

## 依赖

[js-cookie](https://www.npmjs.com/package/js-cookie)

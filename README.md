## 安装

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/js-cookie@{version}/src/js.cookie.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/xy-storage@{version}/dist/index.umd.min.js"></script>
```

### NPM
```shell
npm instll xy-storage --save
```

## 使用
```javascript
import Storage from 'xy-storage'

const options = {
    namespace: 'my_'
}
const store = new Storage(options)

// localStorage
store.local.set('name', 'value' [,{expires: 365}])
store.local.get('name'[, 'default'])
store.local.remove('name')
store.local.clear()

// sessionStorage
store.session.set('name', 'value')
store.session.get('name'[, 'default'])
store.session.remove('name')
store.session.clear()

// cookie
store.cookie.set('name', 'value'[, {expires: 365, path: '', domain: 'subdomain.site.com', secure: true}])
store.cookie.get('name'[, 'default'])
store.cookie.remove('name')
store.cookie.clear()
```

## API
| 名称 | 必填 | 说明 |
|:----|:----|:----|
| namespace | 否 | 命名空间，添加到 name 前，防止多项目储存之冲突 |
| name | 否 | 名称，适用范围：local，session，cookie |
| value | 否 | 储存内容，支持string，object，boolean，适用范围：local，session，cookie |
| default | 否 | 未获取到值时的返回值，默认：null，适用范围：local，session，cookie |
| expires | 否 | 有效期，适用范围：local，cookie |
| path | 否 | 储存路径，适用范围：cookie |
| domain | 否 | 域名，适用范围：cookie |
| secure | 否 | 是否需要安全协议，默认：false【true=是，false=否】，适用范围：cookie |

## 依赖
[js-cookie](https://www.npmjs.com/package/js-cookie)

## 安装

### 浏览器环境
```html
<script src="https://cdn.jsdelivr.net/npm/js-cookie@2.2.1/src/js.cookie.min.js"></script>
```

### 通过 NPM
```shell
npm instll @xuanyu/storage --save
```
```javascript
import Storage from '@xuanyu/storage'
```

## 使用
```javascript
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

namespace：命名空间，添加到 name 前，防止多项目储存之冲突

name: 名称，适用范围：local，session，cookie

value: 储存内容，支持string，object，boolean，适用范围：local，session，cookie

default: 未获取到值时的返回值，默认：null，适用范围：local，session，cookie

expires: 有效期，适用范围：local，cookie

path: 储存路径，适用范围：cookie

domain: 域名，适用范围：cookie

secure: 是否需要安全协议，默认：false【true=是，false=否】，适用范围：cookie

## 依赖
[js-cookie](https://www.npmjs.com/package/js-cookie)

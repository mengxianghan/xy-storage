(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('js-cookie')) :
  typeof define === 'function' && define.amd ? define(['js-cookie'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Storage = factory(global.Cookies));
}(this, (function (Cookies) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var Cookies__default = /*#__PURE__*/_interopDefaultLegacy(Cookies);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  var Interface = /*#__PURE__*/function () {
    function Interface(options) {
      _classCallCheck(this, Interface);

      this.options = Object.assign({}, {
        namespace: '',
        storage: 'local'
      }, options);
      Object.defineProperty(this, 'length', {
        get: function get() {
          return Object.keys(this.storage.get()).length;
        }
      });
      var storage = null;

      switch (this.options.storage) {
        case 'local':
          storage = 'localStorage' in window ? window.localStorage : null;
          break;

        case 'session':
          storage = 'sessionStorage' in window ? window.sessionStorage : null;
          break;

        case 'cookie':
          storage = Cookies__default['default'];
      }

      this.storage = storage;
    }

    _createClass(Interface, [{
      key: "set",
      value: function set() {}
    }, {
      key: "get",
      value: function get() {}
    }, {
      key: "remove",
      value: function remove() {}
    }, {
      key: "clear",
      value: function clear() {}
    }]);

    return Interface;
  }();

  var Cookie = /*#__PURE__*/function (_Interface) {
    _inherits(Cookie, _Interface);

    var _super = _createSuper(Cookie);

    function Cookie(options) {
      _classCallCheck(this, Cookie);

      return _super.call(this, options);
    }
    /**
     * Set
     * @param {string} name
     * @param {*} value
     * @param {object} attrs
     */


    _createClass(Cookie, [{
      key: "set",
      value: function set(name, value) {
        var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        this.storage.set(this.options.namespace + name, JSON.stringify({
          value: value
        }), attrs);
      }
      /**
       * Get
       * @param {string} name
       * @param {*} def 默认为空，如果没有设置名称则返回
       * @return {null|*}
       */

    }, {
      key: "get",
      value: function get(name) {
        var _JSON$parse;

        var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var value = this.storage.get(this.options.namespace + name);
        return value !== '' && typeof value !== 'undefined' ? (_JSON$parse = JSON.parse(value)) === null || _JSON$parse === void 0 ? void 0 : _JSON$parse.value : def;
      }
      /**
       * Remove
       * @param {string} name
       * @param {object} attrs
       * @return {*}
       */

    }, {
      key: "remove",
      value: function remove(name) {
        var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        return this.storage.remove(this.options.namespace + name, attrs);
      }
      /**
       * Clear
       * @param {object} attrs
       */

    }, {
      key: "clear",
      value: function clear() {
        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (this.length === 0) {
          return;
        }

        var removedKeys = [];

        for (var i = 0; i < this.length; i++) {
          var key = Object.keys(this.storage.get())[i];
          var regexp = new RegExp("^".concat(this.options.namespace, ".+"), 'i');

          if (regexp.test(key) === false) {
            continue;
          }

          removedKeys.push(key);
        }

        for (var _key in removedKeys) {
          this.storage.remove(removedKeys[_key], attrs);
        }
      }
    }]);

    return Cookie;
  }(Interface);

  var WebStorage = /*#__PURE__*/function (_Interface) {
    _inherits(WebStorage, _Interface);

    var _super = _createSuper(WebStorage);

    function WebStorage(options) {
      _classCallCheck(this, WebStorage);

      return _super.call(this, options);
    }
    /**
     * Set
     * @param {string} name
     * @param {*} value
     * @param {object} attrs
     * {
     *     @param {number | date} expires 过期时间
     * }
     */


    _createClass(WebStorage, [{
      key: "set",
      value: function set(name, value) {
        var attrs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        var _ref = attrs || {},
            expires = _ref.expires;

        var dateTime = null;

        if (expires) {
          // 数字
          if (typeof expires === 'number') {
            dateTime = new Date();
            dateTime.setDate(dateTime.getDate() + expires);
            dateTime = new Date(dateTime);
          } // 时间对象


          if (_typeof(expires) === 'object') {
            dateTime = expires;
          }
        }

        var stringifyValue = JSON.stringify({
          value: value,
          expires: dateTime || null
        });
        this.storage.setItem(this.options.namespace + name, stringifyValue);
      }
      /**
       * Get
       * @param {string} name
       * @param {*} def 默认为空，如果没有设置名称则返回
       * @return {null|*}
       */

    }, {
      key: "get",
      value: function get(name) {
        var def = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var item = this.storage.getItem(this.options.namespace + name);

        if (item !== null) {
          try {
            var data = JSON.parse(item);

            if (data.expires === null) {
              return data.value;
            }

            if (new Date(data.expires).getTime() >= new Date().getTime()) {
              return data.value;
            }

            this.remove(name);
          } catch (err) {
            return def;
          }
        }

        return def;
      }
      /**
       * Remove
       * @param name
       * @return {*}
       */

    }, {
      key: "remove",
      value: function remove(name) {
        return this.storage.removeItem(this.options.namespace + name);
      }
      /**
       * clear
       */

    }, {
      key: "clear",
      value: function clear() {
        if (this.length === 0) {
          return;
        }

        var removedKeys = [];

        for (var i = 0; i < this.length; i++) {
          var key = this.storage.key(i);
          var regexp = new RegExp("^".concat(this.options.namespace, ".+"), 'i');

          if (regexp.test(key) === false) {
            continue;
          }

          removedKeys.push(key);
        }

        for (var _key in removedKeys) {
          this.storage.removeItem(removedKeys[_key]);
        }
      }
    }]);

    return WebStorage;
  }(Interface);

  var Storage = function Storage() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Storage);

    this.local = new WebStorage(Object.assign({}, options, {
      storage: 'local'
    }));
    this.session = new WebStorage(Object.assign({}, options, {
      storage: 'session'
    }));
    this.cookie = new Cookie(Object.assign({}, options, {
      storage: 'cookie'
    }));
  };

  return Storage;

})));

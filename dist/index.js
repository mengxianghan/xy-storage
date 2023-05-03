(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('storage')) :
	typeof define === 'function' && define.amd ? define(['storage'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.XYStorage = factory(global.Storage));
})(this, (function (Storage) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var Storage__default = /*#__PURE__*/_interopDefaultLegacy(Storage);



	return Storage__default["default"];

}));

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// export var someVar = 'var';
// export const num = num;
// export let arrowFunc = param => param * 2;

// export function mult(param) {
// 	return param * 2;
// }
// function _private(secret) {
// 	return secret;
// }
// export class Person{
// 	cunstructor(name) {
// 		this.name = name;
// 	}
// }
exports.exportConst = 10;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var module_ts_1 = __webpack_require__(0);
console.log(module_ts_1.exportConst);
/**/
// let obj = {name: 'Bill', age: 40};
// let {name, age} = obj;
// console.log(name);
// console.log(age);
/**/
// let obj = {prop: "some val"};
// let {prop: localProp, anotherProp: p = 'value'} = obj;
// console.log(p);
// console.log(localProp);
/**/
// let o = {
// 	p: {
// 		k: 'some val',
// 		l: 'another val'
// 	}
// };
// let {
// 	p: {
// 		k
// 	},
// 	p: {
// 		l : local
// 	},
// 	p: {
// 		m = 'default'
// 	}
// } = o;
// console.log(p.k);
// console.log(p.l);
// console.log(p.m);
/*object destructing*/
// let f = ({
// 	name = "Unknown",
// 	age = 18
// }) => `${name} is ${age}`;
// let person = {name: 'Sam', age: 35};
// console.log(f(person));
/*array destructing*/
// let seq = [1, 2, 3];
// let [one, two] = seq;
// let [, , three] = seq;
// console.log(one);
// console.log(two);
// console.log(three);
/*nested array destructing*/
// let nested = [1, [2, 3]];
// let [one, [two, three]] = nested;
/*rest param destructing*/
// let arr = ['big', 'bada', 'boom'];
// let [first, ...rest] = ar;
// console.log(first);
// console.log(rest);
/*clone array*/
// let someArray = [1, 2, 3];
// let [...anotherArray] = someArray;
// anotherArray[1] = 10;
// console.log(anotherArray);
// /* generator */
// let o = {
// 	a: [1, 2, 3],
// 	*[Symbol.iterator]() {
// 		let [...a] = this.a;
// 		for(let el of a) {
// 			yield `el is ${el}`;
// 		}
// 	}
// }
// for(let e of o) console.log(e);
var str;
str = "5";
/*Types*/
// boolean
// number
// string
// Array: number[] or Array<number>
// let arr: number[] = [1,2,3]
// let arr: Array<String> = ['1', '2', '3']
// tuple
// enum
// any
// let someValue: any = 'this is a string';
// let strLength: number = (<string>someValue).length;
// let strLength: number = (someValue as string).length;
// function fn(name: string, age: number): string {
// 	return `${name} is ${age}`;
// }
// function fn(name: string, age: number): void {
// 	console.log(`${name} is ${age}`);
// } 


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
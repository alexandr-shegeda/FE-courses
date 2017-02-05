import {exportConst} from "./module.ts";

import * as module from './module.ts';


console.log(exportConst);

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

let str:string;

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
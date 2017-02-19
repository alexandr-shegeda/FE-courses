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

// export const exportConst = 10;

export function readonly(config = {
	descriptor: "writable",
	value: false
	}) {

	console.log(config.descriptor, config.value)
	
	return function (target, prop, descriptor) {
		descriptor[config.descriptor] = config.value;
		return descriptor;
	}
}

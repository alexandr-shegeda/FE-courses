/*Immutable*/

// forEach
let numbers = [1, true, 'hello', 5, [1], null, 10];
numbers.forEach(function(number, i, array){
	console.log(`index is ${i} and element is ${number}`);
});

// every
let isNumber = numbers.every(e => typeof e === "number");
console.log(isNumber);

// some
let isAnyEqualFive = numbers.some(e => e === 5);
console.log(isAnyEqualFive);

// filter
let numbersOnly = numbers.filter(e => typeof e === 'number');
console.log(numbersOnly);

// filter
let arrayOfEven = numbersOnly.filter(e => e % 2);
console.log(arrayOfEven);

// find
let hiMessage = numbers.find(e => e === 'hello');
console.log(hiMessage);

// map
let arr = ["sunday", null, "monday", "levelup", 1];
let result = arr
	.filter(e => typeof e === "string")
	.map(e => `${e} ${e.length}`);
console.log(result);

// reduce(previousResult, element)
let sumOfAllNumbers = numbersOnly.reduce((previousResult, element) => previousResult + element);
console.log("reduce: ", sumOfAllNumbers);
// reduce (previous, element, initial)
// reduceRight (previous, element)/(previous, element, initial)

// concat
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8, 4];

let mergeArrays = arr1.concat(10, arr2);

console.log("concat: ", mergeArrays);

// includes
console.log("includes: ", mergeArrays.includes(8));

// join
console.log("join: ", mergeArrays.join(", "));

// slice
console.log("slice: ", mergeArrays.slice(3, -2));

// indexOf
console.log("indexOf: ", mergeArrays.indexOf(0));

// lastIndexOf
console.log("lastIndexOf: ", mergeArrays.lastIndexOf(4));

/*Mutable*/
// fill (element, startIndex, repeat) - replace elements
let arr3 = arr1.fill(12, 0, 2);
console.log("arr3: ", arr3);

// pop - delete last
console.log("pop: ", arr3.pop(), arr3);

// unshift - add element
console.log("unshift: ", arr3.unshift(100), arr3);

// shift - return first element and delete from array (array.length - 1)
console.log("shift: ", arr3.shift(), arr3);

// push - add element to end of array length +1
console.log("push: ", arr1.push(50), arr1);

// revers
console.log("revers", "alice".split("").reverse().join(""));

// sort - bad practice, sorting like strings
console.log("arr3 sort: ", arr3.sort());

console.log("arr3 good sort: ", arr3.sort((a,b) => {
	if(a < b) return -1;
	else if(a > b) return 1;
	return 0;
}));

// splice delete or replace element from middle of array
// splice(startIndex, repeat, replaceValue)
console.log(arr3);
console.log("splice: ", arr3.splice(2, 1));
console.log(arr3);

/*Objects*/

// ; "use strict";
;(function(){

	function getUserName(name) {
		if(typeof name !== "string") throw new NameException("name param should be a string");
		return `User name is ${name}`;
	};

	class NameException extends Error {
		constructor(message){
			super(message);
			this.name = "NameException";
		}
	};

	function MyException(message) {
		Error.call(this, arguments);
	}

	MyException.prototype.name = "MyException";




	// throw new NameException("Some exception");

	// throw new TypeError("name param should be a string");
	
	// try {
	// 	throw new MyException("func constructor exception");
	// 	console.log("getUserName():", getUserName(5));
	// } catch (e) {
	// 	console.error("ERROR:", e.name, e.message);
	// 	// document.body.appendChild("Exception");
	// } finally {
	// 	console.log("Called in any case");
	// }



	// getUserName("Bob");
	// getUserName(2);
	// console.time("Timeout");
	// let tId = setTimeout(function() {
	// 	console.log("1 sec")
	// 	console.timeEnd("Timeout");
	// }, 1000);

	// setTimeout(function() {
	// 	clearTimeout(tId);
	// 	console.timeEnd("Timeout");
	// }, 500);
	// console.time("Interval");
	// let i = 1;

	// let iId = setInterval(function(){
	// 	if(i > 5) {
	// 		console.timeEnd("Interval");
	// 		clearInterval(iId);
	// 	}
	// 	i++;
	// }, 500);

/*Promise*/

	function someFunc(num, cb) {
		let num1 = num + 10;
		cb(num1, function(anotherResult) {
			console.log(anotherResult);
		});
	}

	// someFunc(20, function(result, cb) {
	// 	console.log(result);
	// 	let anotherResult = result - 20;
	// 	cb(anotherResult);
	// });

	// let promise = new Promise(function(resolve, reject) {
	// 	setTimeout(resolve, 2000);
	// });

	// promise
	// 		.then(function(res) {
	// 			console.log(res);
	// 		})
	// 		.catch();

	// let namePromise = new Promise(function(res, rej) {
	// 	// setTimeout(function(name){
	// 	// 	console.log(name);
	// 	// }, 1000, "Bob");
	// 	setTimeout(res, 1000, "Bob");
	// });

	// let lastNamePromise = new Promise(function(res, rej) {
	// 	setTimeout(res, 2000, "Smith");
	// });

	// Promise.all([namePromise, lastNamePromise])
	// 		.then(res => console.log(res.join(" ")))
	// 		.catch(e => console.error(e));

	let peopleList = fetch("http://swapi.co/api/people/1")
		.then(res => res.json())
		.then(function(res) {
			// console.log(res);
			let films = res.films;
			let name = res.name;

			let getFilms = films.map(film => fetch(film).then(res => res.json()));
			return Promise.all(getFilms).then(res => ({name, films: res}));
		})
		.then(function(res) {
			let name = res.name,
				films = res.films;

			console.log(`${name}\n${films.map(film => "Film:" + film.title).join("\n")}`);
		});
})();
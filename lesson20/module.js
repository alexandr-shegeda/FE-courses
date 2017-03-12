"user strict";
// exports.a = "A";

// const f = param => console.log(`${param}!`);

// exports.f = f;

// class User {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	greet(greeting) {
// 		return `${greeting}! My name is ${this.name}`;
// 	}
// }

// module.exports = User;

const Transform = require("stream").Transform;

class MyTransform extends Transform {

	constructor(options) {
		super(options);
	}

	_transform(chunk, encoding, cb) {
		this.push(String(chunk).toUpperCase() + "\r\n");
		cb();
	}
}

const transform = new MyTransform();

process.stdin
		.pipe(transform)
		.pipe(process.stdout);
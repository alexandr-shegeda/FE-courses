"user strict";

// const myModule = require("./module");
// const User = require("my-module");


// console.log(myModule.a);
// myModule.f("Hi");

// let user = new User("Jhak");

// console.log(user.greet("Bonjour"));

// const someFunc = arg => console.log("Call with args: ", arg);

// const to = setTimeout(someFunc, 1000, "my argument");
// const im = setImmediate(someFunc, "my argument");
// const inv = setInterval(someFunc, 100, "my argument");

// clearTimeout(to);
// clearImmediate(im);
// clearInterval(inv);

// process.stdout.write(Date.now() + " - [Hello from node process]");

/*Global variables*/
// global
// exports
// module

/* Process */
// process.nextTick(callback)
// process.send({message})
// process.stdin
// process.stdout
// process.stderr
// process.swd()

/* Stream */
// Readable
// Writable
// Duplex
// Transform

const Readable = require("stream").Readable;

const data = ("Hello. This is a data for Readable stream").split(" ");

class MyReadable extends Readable {
	constructor(options) {
		super(options);
	}

	_read() {
		if(data.length) {
			setTimeout(() => this.push(data.shift() + "\r\n"), 100);
		} else {
			this.push(null);
		}
	}
}

const stream = new MyReadable();

// stream.pipe(process.stdout);

const EventEmitter = require("events");

class LUEmitter extends EventEmitter {}

const myEmitter = new LUEmitter();

// myEmitter.on("someEv", data => console.log(data));

// myEmitter.on("error", err => console.log("ooops!", err));

// process.on("uncaughtException", err => console.log(err));

// myEmitter.emit("someEv", {data : "some data"});

// setTimeout(() => myEmitter.emit("someEv", {data : "async event"}), 1000);

// myEmitter.once("someEvent", () => console.log("Some event fired"));

// setTimeout(() => {
// 	myEmitter.emit("error", new Error("blah"));
// }, 500)

/* <WARNING>: <Do not repeat> */
// setInterval(() => {
// 	myEmitter.once("someEv", data => {
// 		console.log((process.memoryUsage().heapUsed / (1024 * 1024)) + " mb");
// 	});

// 	setTimeout(() => {
// 		myEmitter.emit("someEv", "some data");
// 	}, 100);

// }, 100);

const fs = require("fs");

// fs.writeFile("test.txt", "Hello World", err => {
// 	if(err) throw new Error("Ouch");

// 	console.log("Done");
// });

// fs.appendFileSync("test.txt", "\r\nNew line 1");
// fs.appendFileSync("test.txt", "\r\nNew line 2");

fs.readFile("test.txt", {encoding: "utf8"}, (err, content) => {
	if(err) throw err;

	console.log(content);
})
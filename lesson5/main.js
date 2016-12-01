// ; "use strict";
/*Constructor function*/

let users = [];

/*function User(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

users.push(new User("Bob", 20, "male"));
users.push(new User("Jane", 22, "female"));



User.prototype.sayHi = function(greet) {
	return `${greet}! My name is ${this.name}`;
}

console.log(users);

console.log(users[0].sayHi("Hello"));
console.log(users[1].sayHi("Privet"));*/

/*;(function() {
	"use strict";

	let dwarfs = [],
		dwarfId = 0;

	function getId() {
		return ++dwarfId;
	}

	function Boots(type, size, color, isFunny) {
		this.type = type;
		this.size = size;
		this.color = color;
		this.isFunny = isFunny;
	}

	function Dwarf(
		name, 
		age, 
		height, 
		gender, 
		beard, 
		hat, 
		boots,
		instrument,
		classTitle,
		health,
		id,
		clan) {

		this.name = name;
		this.age = age;
		this.height = height;
		this.gender = gender;
		this.beard = beard;
		this.hat = hat;
		this.boots = boots;
		this.instrument = instrument;
		this.classTitle = classTitle;
		this.health = health;
		this.id = id;
		this.clan = clan;
	}

	Dwarf.prototype.mine = 1e6;

	Dwarf.prototype.mineGold = function() {
		let mine = Dwarf.prototype.mine;
		let quantity = this.classTitle === "miner" ? 20 : 5;
		if(mine < quantity) {
			quantity = mine;
		}
		Dwarf.prototype.mine -= quantity;
		console.log("mine:", Dwarf.prototype.mine);
		console.log(this.name, "mine", quantity, "gold");
		return quantity;
	}

	Dwarf.prototype.fight = function(opponent, fightBack) {
		let damage = this.classTitle === "warrior" ? 20 : 5,
			health = opponent.health,
			self = this;
		if(health > damage) {
			opponent.health -= damage;
			if(!fightBack) opponent.fight(self, true);
		} else {
			dwarfs.splice(dwarfs.findIndex(dwarf => dwarf.id === opponent.id), 1);
			//or
			// opponent.health = 0;
			// dwarfs = dwarfs.filter(dwarf => dwarf.health > 0);
		}

		console.log(opponent);
		console.log(self);
	}

	let funnyGreenSmallBoots = new Boots("shoes", 7, "pink", false);
	let notFunnyDarkBigBoots = new Boots("shoes", 12, "dark", false);

	dwarfs.push(new Dwarf(
		"Bronson", 
		120,
		67, 
		"male",
		true, 
		"helmet", 
		notFunnyDarkBigBoots, 
		"axe",
		"warrior",
		100,
		getId(),
		"Black beards"
		));

	dwarfs.push(new Dwarf(
		"Creepy", 
		110,
		73, 
		"male",
		true, 
		"helmet", 
		notFunnyDarkBigBoots, 
		"sword",
		"miner",
		200,
		getId(),
		"Blue beards"
		));

	dwarfs.push(new Dwarf(
		"Beauty", 
		90,
		66, 
		"female",
		false, 
		"helmet", 
		funnyGreenSmallBoots, 
		"knife",
		"warrior",
		200,
		getId(),
		"No beards"
		));

	dwarfs[1].mineGold();
	while(dwarfs.length > 1) {
		dwarfs[0].fight(dwarfs[1]);

		console.log(dwarfs[0]);
		console.log(dwarfs[1]);
	}

	console.log(dwarfs);
})();*/

/*Prototype function*/

let myProto = {

	constructor(name) {
		this.name = name;
		return this;
	},
	sayHi(greet){
		return `${greet}! My name is ${this.name}`;
	}
};

let newProto = myProto.constructor("Alex");
console.log(newProto.sayHi("Privet"));

let User = {
		constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		return this;
	},
	sayHi(greet) {
		return `${greet}! My name is ${this.name}`;
	}
};

let user1 = Object.create(User).constructor("Bob", 20, "male");
let user2 = Object.create(User).constructor("Jane", 22, "female");

// console.log(user1.sayHi("Privet"));
// console.log(user2.sayHi("Hello"));

// console.log(user1);
// console.log(user2);

(function(){

	// let Person = {
	// 	constructor(name, age, gender){
	// 		this.name = name;
	// 		this.age = age;
	// 		this.gender = gender;

	// 		return this;
	// 	},
	// 	sayHi(greet) {
	// 		return `${greet}! I'm ${this.name}`;
	// 	}
	// };

	// let Student = Object.create(Person);
	// let Professor = Object.create(Person);

	// Student.constructor = function(name, age, gender, course) {
	// 	// Person.constructor(this, name, age, gender);
	// 	Person.constructor.apply(this, arguments);
	// 	this.course = course;
	// 	this.marks = [];

	// 	return this;
	// };

	// Professor.addMark = function(student, mark) {
	// 	student.marks.push(mark);
	// }
	// let student = Object.create(Student).constructor("Senya", 30, "male", "js");
	// let professor = Object.create(Professor).constructor("Bob", 27, "male");

	// console.log(student.sayHi("Hello"));
	// console.log(professor.sayHi("Privet"));

	// professor.addMark(student, 5);

	// console.log(student);
	// console.log(professor);

	class Person {
		constructor(name, age, gender) {
			this.name = name;
			this.age = age;
			this.gender = gender;
		}

		sayHi(greet) {
			return `${greet}! I'm ${this.name}`;
		}
	};

	console.log(new Person("Alex", 25, "male"));

	class Student extends Person {
		constructor(name, age, gender, course) {
			super(name, age, gender);
			this.course = course;
			this.marks = [];
		}
	};

	class Professor extends Person {
		constructor(name, age, gender) {
			super(name, age, gender);
		}

		addMark(student, mark) {
			student.marks.push(mark);
			return mark;
		}
	}

	let student = new Student("Senya", 30, "male", "js");
	let professor = new Professor("Bob", 27, "male");

	console.log(student.sayHi("Hello"));
	console.log(professor.sayHi("Privet"));

	professor.addMark(student, 5);

	console.log(student);
	console.log(professor);


	if(!("map" in String.prototype)){
		String.prototype.map = function(separator, joinWith, callback) {
			return this.split(separator).map(callback).join(joinWith);
		}
	}

	let str = "Don't be afraid about method map of string";
	console.log(str.map(" ", "%20", function(part){
		return "\"" +  part + "\"";
	}))
})();
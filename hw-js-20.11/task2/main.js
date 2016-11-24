// Создать объект, который будет описывать человека. А именно, студента LevelUp. У Объекта есть следующие свойства:
// имя студента (строка)
// фамилия (строка)
// возраст (число)
// изучаемые предметы/курсы (массив объектов, где каждый объект - это описание отдельного курса. См. вложенный список)
	// Название курса (строка)
	// Имя преподавателя (строка)
	// Продолжительность курса в часах (число)
	// Пройдено курса (число от 0 до 1)
	// Оценки (массив чисел от 1 до 5)


// Кроме этих свойств, объект содержит ряд методов:
// getFullName - метод возвращает строку, в которой указаны имя и фамилия студента
// getAge - метод возвращает строку с возрастом (например, “31 years old”)
// getCourses - возвращает строку с курсами/предметами, перечисленными через запятую (например, “frontend, python, php”)
// addNewCourse - принимает параметры: teacherName  (строка), course (строка), duration (число). Добавляет новый курс в массив курсов студента.
// getAvarageMarkByCourse - принимает параметр course (строка), и возвращает среднее арифметическое из оценок в курсе. Или null, если в курсе нет оценок.
// getAvarageMark - возвращает среднее арифметическое из всех оценок во всех курсах
// addMark - принимает параметры course (строка), mark (число) и добавляет оценку в массив оценок курса. (оценка может быть только целым числом от 1 до 5.)
// addProgress - принимает параметры course (строка) и hours (число) и возвращает прогресс прохождения курса (число от 0 до 1). (сумма пройденных часов в курсе не может превышать указанную продолжительность курса)
// getProgress - возвращает строку с информацией о том, какая часть курса уже пройдена (например, “33%”)

let course = {
	courseName: null,
	teacherName: null,
	duration: 0,
	progress: 0.0,
	marks: []
};

let student = {
	firstName: null,
	lastName: null,
	age: 0,
	courses: [],
	getFullName: function() {
		return this.firstName + " " + this.lastName;
	},
	getAge: function() {
		return this.age + " years old";
	},
	getCourses: function() {
		return this.courses.map(course => course.courseName).join(", ").slice(0, -2);
	},
	addNewCourse: function(teacherName, course, duration) {

	},
	getAvarageMarkByCourse: function(courseName) {
		let course = this.courses.filter(course => course.courseName === courseName)[0];
		if(course.marks.length === 0) return null;
		return course.marks.reduce((prev, current) => prev + current) / course.marks.length;
	},
	getAvarageMark: function() {
		return this.courses.map(course => {
			let res = course.getAvarageMarkByCourse(course.courseName);
			return res == null ? 0 : res;
		}).reduce((prev, current) => prev + current)
	},
	addMark: function(courseName, mark) {
		if(mark >= 1 && mark <= 5) {
			this.courses.filter(course => course.courseName === courseName)[0].marks.push(mark);
		}
	},
	addProgress: function(courseName, hours) {
		if(!hours) return 0;
		let course = this.courses.filter(course => course.courseName === courseName)[0];
		let progress = Number.toFixed(course.duration / hours, 2);
		course.progress = progress;
		return progress;
	},
	getProgress: function(courseName) {
		let course = this.courses.filter(course => course.courseName === courseName)[0];
		return course.progress;
	}
};
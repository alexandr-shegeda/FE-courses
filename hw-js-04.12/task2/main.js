// Внимательно ознакомьтесь с API http://swapi.co.
// Сценарий работы:
// С помощью метода prompt() просим пользователя ввести номер персонажа (пока это от 1 до 87) по которому нужно получить информацию.

// Если номер был введен неправильно, то сообщаем об этом пользователю.
// Если номер введен верно, то формируем ответ, в котором:
// Указано имя персонажа
// Названия эпизодов, в которых участвовал персонаж
// Название вида существ, к которому относится персонаж
// Язык, присущий этому виду
// Имена других представителей этого вида

// Ответ:
// Name: Leia Organa
// Films: Revenge of the Sith, Attack of the Clones, A New Hope
// Species: Human
// Language: "Galactic Basic"
// Same origin: Luke Skywalker, ...


;(function(){

	let personId = prompt("Enter personId:");
	while(Number(personId) < 1 || Number(personId) > 87) {
		alert("Person id is not correct. It's shoult be from 1 to 87");
		personId = prompt("Enter personId:");
	}

	let res = fetch(`http://swapi.co/api/people/${personId}`)
	.then(res => res.json())
	.then(function(res) {
		console.log(res);
		let films = res.films,
		name = res.name,
		species = res.species;

		let getFilms = films.map(film => fetch(film).then(res => res.json()));
		let getSpecies = fetch(species[0]).then(res => res.json());
		return Promise.all(getFilms).then(res => ({name, getSpecies, films: res}));
	})
	.then(function(res) {
		let name = res.name,
		films = res.films,
		species = res.getSpecies;

		return Promise.all([species]).then(res => ({name, films, species: res}));
	})
	.then(function(res) {
		let name = res.name,
		films = res.films,
		lang = res.species[0].language,
		species = res.species[0].name;

		let getPeopleList = res.species[0].people.map(people => fetch(people).then(res => res.json()));
		return Promise.all(getPeopleList).then(res => ({name, lang, species, films, peopleList: res}));
	})
	.then(function(res) {
		let name = res.name,
		lang = res.lang,
		species = res.species,
		films = res.films,
		peopleList = res.peopleList;

		console.log(`Name: ${name}\nFilms: ${films.map(film => film.title).join(",")}\nSpecies: ${species}\nLanguage: ${lang}\nSame origin: ${peopleList.map(people => people.name).join(", ")}`);
	});

})();
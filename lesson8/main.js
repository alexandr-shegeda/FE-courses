// ; "use strict";
;(function(){

	let users = [
	{name: 'Bob', id: 'bob', age: 20, default: true},
	{name: 'Alice', id: 'alice', age: 22},
	{name: 'Ivan', id: 'ivan', age: 23}
	];

	// console.log(location.href);

	// setTimeout(() => {
	// 	location.href = location.origin + "#newHash";
	// },1000);

	// window.addEventListener('hashchange', (e) => {
		// console.log(e);
		// console.log(location.href);
	// });

	document.body.addEventListener('click', handleClick);

	function handleClick(event) {
		if(event.target.localName === 'a') {
			event.preventDefault();
			let id = event.target.getAttribute("href").slice(1);
			history.pushState({id}, "", `${location.origin}/${id}`);
		}
	}

	function renderPerson(event) {
		if(!event.state || !event.state.id) return;
		
		let id = event.state.id;
		user = id ? users.find(u => u.id === id)
		: users.find(u => u.default)
		printData = `Username: ${user.name}, age: ${user.age}`;
		console.log(user);

		document.querySelector('p').textContent = printData;
	}


	function renderPersonByHash(event) {
		let hash = location.hash.slice(1),
		user = hash ? users.find(u => u.id === hash)
		: users.find(u => u.default)
		printData = `Username: ${user.name}, age: ${user.age}`;
		console.log(user);

		document.querySelector('p').textContent = printData;
	}

	window.addEventListener('popstate', renderPerson);
	// location.asign("") - save to history
	// location.replace("") - don't save to history
	// location.reload() - just guess


	// encodeURI
	// encodeURIComponent

	// decodeURI
	// decodeURIComponent

	// navigator.cookieEnabled
	// navigator.doNotTrack
	// navigator.language
	// navigator.online
	// navigator.platform

})();
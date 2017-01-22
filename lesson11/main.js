; "use strict";
;(function(){

	/*read cookie*/
	document.cookie;

	";path=path"
	";domain=domain"
	";max-age=60*60*24"		//in seconds
	";expires"
	";secure"

	";HttpOnly"

	document.cookie = "key=some_val";

	let data = {someKey : "value"};

	localStorage.setItem("data", JSON.stringify(data));

	localStorage.getItem("data");

	console.log(localStorage);

})();
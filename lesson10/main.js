// ; "use strict";

// 178.62.203.188:8888
// ;(function(){
	// function fn() {return 1;}

	// fn.toJSON = function() {
	// 	return "call JSON.stringify() for fn";
	// }

	// console.log(JSON.stringify(fn));

	// const xhr = new XMLHttpRequest();

	/* method, url[, async[, user, password]] */
	// xhr.open("GET", "http://swapi.co/api/people/1/", false);

	// xhr.send();

	// if(xhr.status !== 200) 
	// 	throw new Error("Aaa!! Something went wrong");
	// else{
	// 	console.log(xhr);

	// 	console.log("response", xhr.response);
		/* ArrayBuffer, Blob, Document, JS object, DOMString */

	// 	console.log("responseText", xhr.responseText);
	// console.log("responseType", xhr.responseType); 		// writable | config
	// console.log("responseURL", xhr.responseURL);
	// console.log("responseXML", xhr.responseXML);
	// console.log("status", xhr.status);				// status code
	// console.log("statusText", xhr.statusText);
	// console.log("timeout", xhr.timeout);			// writable | config
	// console.log("withCredentials", xhr.withCredentials);	// writable | config

	// xhr.abort();
	// xhr.getResponseHeader();
	// xhr.open();
	// xhr.send();
	// xhr.setRequestHeader("Content-Type" : "application/json");

	// xhr.addEventListener("load", function(){});
	// xhr.addEventListener("error", function(){});
	// let data = {name: "Kenny", age: 12};

	// xhr.send(JSON.stringify(data));

	// fetch (utl[, options]);
// }

// let options = {
// 	method : "POST",
// 	headers: {"Content-Type" : "application/json"},
// 	body: JSON.stringify({prop:1}),
// 	mode: "cors",
// 	credentials: "include",
// 	cache: "default",
// 	redirect: "follow"
// };

/* Headers */

	// Headers.append();
	// Headers.delete();
	// Headers.get();
	// Headers.getAll();
	// Headers.has();
	// Headers.keys();
	// Headers.set();

	// let headers = new Headers();
	// headers.append("Content-Type", "application/json");

	/* Request props */
	// Request.method;
	// Request.url;
	// Request.headers;
	// Request.referrer;
	// Request.referrerPolicy;
	// Request.mode;
	// Request.credentials;
	// Request.redirect;
	// Request.cache;

	/* Request method */
	// Request.clone();

	/* Response props */
	// Response.headers;
	// Response.ok;
	// Response.status;
	// Response.statusText;
	// Response.type;
	// Response.url;

	/* Response mothods */
	// Response.clone();
	// Response.errod();
	// Response.redirect();

	/* Body */
	// Body.arrayBuffer();
	// Body.blob();
	// Body.formData();
	// Body.json();
	// Body.text();

	// let ws = new WebSocket(url);

	// ws.onopen = ev => {};
	// ws.onclose = ev => {};
	// ws.onmessage = ev => {};
	// ws.onerror = ev => {};
	// ws.send("some message");
	// ws.close();

	var wsUri = "ws://echo.websocket.org/";
	var output;

	function init() {
		output = document.getElementById("output");
		testWebSocket();
	}

	function testWebSocket() {
		websocket = new WebSocket(wsUri);
		websocket.onopen = function(evt) { onOpen(evt) };
		websocket.onclose = function(evt) { onClose(evt) };
		websocket.onmessage = function(evt) { onMessage(evt) };
		websocket.onerror = function(evt) { onError(evt) };
	}

	function onOpen(evt) {
		writeToScreen("CONNECTED");

		let chat = document.querySelector("#chat");
		chat.style.visibility = 'visible';

		let disconnectBtn = document.querySelector("#disconnectBtn");

		disconnectBtn.style.visibility = 'visible';
	}

	function onClose(evt) {
		writeToScreen("DISCONNECTED");

		let connectBtn = document.querySelector("#connectBtn");

		connectBtn.style.visibility = 'visible';
	}

	function onMessage(evt) {
		writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
		// websocket.close();
	}

	function onError(evt) {
		writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
	}

	function doSend(message) {
		writeToScreen("SENT: " + message);
		websocket.send(message);
	}

	function writeToScreen(message) {
		var pre = document.createElement("p");
		pre.style.wordWrap = "break-word";
		pre.innerHTML = message;
		output.appendChild(pre);
	}

	function connect() {
		init();
		let connectBtn = document.querySelector("#connectBtn");

		connectBtn.style.visibility = 'hidden';
	}

	function disconnect() {
		websocket.close();
		let disconnectBtn = document.querySelector("#disconnectBtn");

		disconnectBtn.style.visibility = 'hidden';

		let chat = document.querySelector("#chat");
		chat.style.visibility = 'hidden';
	}

	function send() {
		let msgInput = document.querySelector("#message"),
		message = msgInput.value;

		msgInput.value = "";

		doSend(message);
	}

// })();
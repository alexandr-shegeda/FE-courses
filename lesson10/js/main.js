;(function() {
	"use strict";

	const ws = io("http://178.62.203.188:8888");

	ws.on("chat message", data => {
		console.log(data);

		let $p = document.createElement("p");

		$p.textContent = data.message;

		$messagesContainer.appendChild($p);
	});
	

	let $messagesContainer = document.getElementById("messages-container");

	let $chatFrom = document.getElementById("chat-form"),
		$chatMessageInput = document.getElementById("message");

	$chatFrom.addEventListener("submit", onSendMessage);

	function onSendMessage(event) {
		event.preventDefault();
		let message = $chatMessageInput.value.trim();
		if(!message) return;

		$chatMessageInput.value = "";
		ws.emit("chat message" , {message});
	}

})();
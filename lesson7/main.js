// ; "use strict";
;(function(){

	function parseRequest(request) {
		let reg = /(\d{4}\/\d{1,2}\/\d{1,2}__bid_\d+\.\d+-ask_\d+\.\d{2})+\|?/gm;
		let dateReg = /\d{4}\/\d{1,2}\/\d{1,2}/;
		let bidReg = /(?!bid_)\d+\.\d+/;
		let askReg = /(?:ask_)\d+\.\d+/;

		let arr = request.split(reg);
		let stockName = arr[0].slice(0, -1);

		let stock = {
			stockName,
			rates:[]
		};

		stock.rates = arr.filter(line => reg.test(line)).map(line => {
			let date = line.match(dateReg)[0],
			bid = Number(line.match(bidReg)[0]),
			ask = Number(line.match(askReg)[0].replace("ask_", ""));

			return {date, bid, ask};
		});

		console.log(stock);
		return stock;
	}

	let request = "apple:2016/5/27__bid_203.38-ask_203.43|2016/5/28__bid_203.35-ask_203.42|2016/5/28__bid_203.39-ask_203.45";

	// parseRequest(request);

	let re = /\{\{\$ctrl\.(\w+)\}\}/;

	let q = document.body.textContent;

	let $ctrl = {
		someprop: "!!!"
	};

	document.body.textContent = q.replace(re, replaceFunc);

	function replaceFunc(match, property) {
		let result = $ctrl[property] || "";
		return result;
	}

	let pe = /\(\d{3}\)/g;

	document.querySelector("button").addEventListener("click", e => {
		let phone = document.querySelector("input").value;

		let testResult = pe.test(phone);

		console.log(testResult);
	});

})();
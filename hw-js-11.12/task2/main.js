// Условный запрос на сервер для получения информации о состоянии рынка ценных бумаг возвращает на строку типа:

// apple:2016/5/27__bid_203.38-ask_203.43|2016/5/28__bid_203.35-ask_203.42|2016/5/28__bid_203.39-ask_203.45

// После разбора строки с помощью регулярного выражения нужно получить объект вида:

function parseRequest(request) {
	let reg = /(\d{4}\/\d{1,2}\/\d{1,2}__bid_\d+\.\d+-ask_\d+\.\d{2})+\|?/gm;

	let stock = {
		stockName: request.match(/\w+(?=:)/)[0],
		rates:[]
	};

	stock.rates = request.match(reg).map(line => {
		let date = line.match(/\d{4}\/\d{1,2}\/\d{1,2}/)[0],
		bid = Number(line.match(/(?!bid_)\d+\.\d+/)[0]),
		ask = Number(line.match(/(?:ask_)\d+\.\d+/)[0].replace("ask_", ""));
		return {date, bid, ask};
	});

	return stock;
}
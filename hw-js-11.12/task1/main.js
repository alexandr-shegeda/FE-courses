// На запрос к серверу о дате последнего изменения документа вы получаете ответ в строке, которая имеет формат:
// 2016/05/20-12:00:35+0300

// Задача - получить из этой строки объект класса Date и вывести в консоль эту дату в формате timestamp (1463727635000)

function convertDateToTimestamp(dateStr) {
	let year = dateStr.match(/\d{4}/)[0],
	month = dateStr.match(/\d{2}(?=\/)/g)[1] - 1,
	day = dateStr.match(/\d{2}(?=-)/)[0],
	timeArr = dateStr.match(/\d{2}:\d{2}:\d{2}/)[0].split(":");

	return + new Date(year, month, day, timeArr[0], timeArr[1], timeArr[2]);
}
// Создать такой метод на прототипе конструктора Date, который будет принимать строку форматирования даты и возвращать строку с датой, отформатированную согласно условию.

// Для форматирования могут быть приняты следующие сокращения:
// YYYY - полный год
// YY - последние две цифры года
// MM - месяц, в цифровом представлении
// MMMM - месяц, в словарном представлении на любом, удобном вам, языке
// DD - день месяца
// HH - часы, в 24 часовом представлении
// mm - минуты
// ss - секунды
const monthNames = [null, "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

Date.prototype.customFormat = function(pattern) {	
	let monthNum = this.getMonth() + 1;	
	let year = this.getFullYear();

	return pattern	.replace("YYYY", year)
					.replace("MMMM", monthNames[monthNum])
					.replace("YY", formatDigits(year%100))
					.replace("MM", formatDigits(monthNum))
					.replace("DD", formatDigits(this.getDate()))
					.replace("HH", formatDigits(this.getHours()))
					.replace("mm", formatDigits(this.getMinutes()))
					.replace("ss", formatDigits(this.getSeconds()));
}

function formatDigits(num) {
	return num < 10 ? "0" + num : num;
}
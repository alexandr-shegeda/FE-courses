/*Реализовать функцию-счетчик.
Используя prompt() просим пользователя ввести число, которым инициализируется (начинается) счетчик.
Вторым prompt() просим указать шаг отсчета (число, на которое счетчик будет увеличивать свое значение)
Третьим - пользователь вводит количество повторений (вызовов) счетчика.

В итоге выводи alert, в котором сообщаем об итоговом значении счетчика после указанного количества повторений.*/

let init = function () {
	var initNum = Number(prompt("Enter init number for counter:"));

	return function() {
		var step = Number(prompt("Enter step for counter:"));
		var repeat = Number(prompt("Enter repeat for counter:"));

		return initNum + step * repeat;
	};
};

let counter = init();
alert(counter());
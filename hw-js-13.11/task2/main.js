/*Минимум двумя способами (arguments, rest parameter) реализовать функцию, которая принимает произвольное количество аргументов и возвращает строку, в которой через запятую перечислены типы аргументов, определяемых оператором typeof.

Например,
argsToString(1, true, “hi”); 	// -> “number, boolean, string”;*/

function paramsTypeofToString(...params) {
	var res = "";
	params.forEach(function(param){
		res += typeof param + ", ";
	});
	res = res.slice(0, -2);
	console.log(res);
	return res;
}

function argumentsTypeofToString() {
	var res = "";
	for(var i = 0; i < arguments.length; i++) {
		res += typeof arguments[i] + ", ";
	}
	res = res.slice(0, -2);
	console.log(res);
	return res;
}
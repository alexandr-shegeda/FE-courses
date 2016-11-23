let nums = [1, 2, 3, 5, 8, 13, 21, 34];
let str = ["this", "is", "a", "very", "long", "array", "which", "has", "absolutely", "no", "sense"];

// Сумма удвоенных значений каждого элемента (Number)
console.log(1, nums.reduce((previousNum, currentNum) => previousNum + currentNum * 2, 0));

// Узнать, есть ли в массиве четные числа (Boolean)
console.log(2, nums.some(x => x % 2 == 0));

// Соединить элементы массива в одну строку, где слова разделены пробелами (String)
console.log(3, str.join(" "));

// Получить новый массив, в котором к каждому элементу (строке) будет добавлено число, равное количеству символов в этой строке. Например, [“this - 4”, “is - 2” ....] (Array)
console.log(4, str.map(element => element + ` - ${element.length}`));

// Получить новый массив, в котором все элементы (строки) содержат 4 или более символов (Array)
console.log(5, str.filter(item => item.length >= 4));

// Получить массив, который будет содержать только нечетные числа (Array)
console.log(6, nums.filter(item => item % 2 != 0));

// Сообщить, является ли сумма всех элементов больше 100 (Boolean)
console.log(7, nums.reduce((prev, current) => prev + current) > 100);

// Получить новый массив, в котором все элементы будут отсортированы по количеству символов в строке по возрастанию (Array)
console.log(8, str.sort((left, right) => {
	if(left.length > right.length) return 1;
	else if(right.length > left.length) return -1;
	else return 0;
}));

// Найти индекс самого длинного слова в массиве (Number)
console.log(9, str.reduce((prevIndex, current, currentIndex, array) => array[prevIndex].length < array[currentIndex].length ? currentIndex : prevIndex, 0));

// Получить строку, которая будет содержать все элементы двух массивов перечисленных через запятую (String)
console.log(10, str.concat(nums).join(", ").slice(0, -2));


// Написать функцию, которая будет принимать строку (только буквы латинского алфавита) любой длины и возвращать ее, но удалив из нее все гласные буквы английского алфавита. (их всего 6:  «A», «E», «I», «O», «U», «Y»)
function filterString(str) {
	return str.replace(/[AEIOUY]/gi, "");
}

console.log(filterString("hEllo My deAr TeachEr, I wOuD liKe to shOw YoU My gReaT CodE"));
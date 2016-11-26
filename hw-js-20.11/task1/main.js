let obj = {
  num: 1.24,
  str: "not very long string",
  f() {
    return this.str.split(" ");
  },
  arr: ["some", "array", {someProp: "value"}],
  prop: { key: 1 },
  empty: null,
  last: 0
};

// Написать функцию, передав в которую исходный объект, мы получим новый объект вида:
// {
//   "количество собственных свойств”: 7,
//   propTypes: ["number”, "string”, "function”, …, "number”],
//   propNames: ["num”, "str”, …, "last”]
// }

// Исходный объект после отрабатывания функции изменяется:
// все числовые значения свойств первого уровня (*) преобразуются в числа с плавающей точкой с двумя знаками после точки;
// все строковые значения первого уровня преобразуются к верхнему регистру;
// объект становится не расширяемым (нельзя добавлять новые свойства).

// Исходный объект является примером. Функция может принимать любой объект и соответственно менять  возвращаемое значение.

function changeObj(obj) {
  let newObj = Object.create(obj);
  let keys = Object.keys(obj);
  newObj["количество собственных свойств"] = keys.length;
  newObj.propTypes = keys.map(prop => typeof obj[prop]);
  newObj.propNames = keys;

  console.log(newObj);

  for(prop in obj) {
    if(typeof obj[prop] === "number") {
      obj[prop] = Number(obj[prop].toFixed(2));
    } else if(typeof obj[prop] === "string") {
      obj[prop] = obj[prop].toUpperCase();
    }
  }
  Object.preventExtensions(obj);
}
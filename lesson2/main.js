let someText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis debitis quisquam quis nulla officia, dolores, natus suscipit earum doloremque at modi esse dicta ad beatae accusantium adipisci tenetur soluta qui.';

console.log(someText.charAt(2));
console.log(someText.indexOf("isp"));
console.log(someText.lastIndexOf("sit"));
console.log(someText.toUpperCase());
console.log(someText.toLowerCase());

let name = "  Alex  ";
console.log(name.trim());
console.log(name.trimRight());
console.log(name.trimLeft());


console.log(someText.includes("Lorem"));
console.log(someText.startsWith("Lorem"));
console.log(someText.endsWith("."));

console.log(someText.slice(6));
console.log(someText.slice(12, 17));
console.log(someText.substr(-25, 5));
console.log(someText.substring(-25, 5));
console.log("bla-".repeat(3).slice(0, -1));
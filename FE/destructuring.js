const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a);

// Destruc với Object
const person = {name: "Huy", age: "22"};
const{name, age} = person;
console.log(name, age)

// Destruc với tham số hàm
function greet({name, age}) {
    console.log(`Hello ${name}`);
}

greet({name: "Huy", age: "22"})
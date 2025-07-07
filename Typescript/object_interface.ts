// Object
let person03: {
    name: string;
    location: string;
    age: number;
};
person03 = {
    name:"Huy",
    location:"Viet Nam",
    age: 22,
};


// interface
interface Person {
    name: string;
    location: string;
    age: number;
};
let person1: Person ={
    name:"Huy Nguyễn",
    location: "Sai Gon",
    age: 21,
};
let person2: Person = {
    name:"Nguyễn Anh Huy",
    location:"Ho Chi Minh",
    age: 23,
};

console.log(person1);
console.log(person2)
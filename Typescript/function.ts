interface Speech {
    sayHi(name: string): string; // viết theo kiểu cữ
    sayBye: (name:string) => string; // viết theo ES6
}

let said: Speech = {
    sayHi: function (name: string) {
        return `Hello ${name}`;
    },
    
    sayBye: (name:string) => `Bye ${name}`,
};

console.log(said.sayHi("Huy Nguyễn"));
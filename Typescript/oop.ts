class Students {
    id: number;
    name: string;
    age: number;


constructor (id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
}

get getId() {
    return this.id;
}
set setId(id: number) {
    this.id = id;
}

get getName() {
    return this.name;
}
set setName(name: string){
    this.name = name;
}

get getAge() {
    return this.age;
}
set setAge(age: number) {
    this.age = age
}
}

export default Students;
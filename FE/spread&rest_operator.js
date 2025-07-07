//Spread (giải nén)
// with array
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

// with Object
const obj1 = {a: 1,b: 2};
const obj2 = {...obj1, c:3};
console.log(obj2);

// with function
function sum(a, b, c) {
    return a + b + c;
}
const nums = [1,2,3];
const total = sum(...nums);
console.log(total);

// Rest (nén)
// with array 
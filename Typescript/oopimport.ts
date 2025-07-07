import Students from './oop';

let s1 = new Students(1, "An", 20);
let s2 = new Students(2, "Bình", 21);
let s3 = new Students(3, "Cường", 22);

let sArr: Students[] = new Array();
sArr.push(s1);
sArr.push(s2);
sArr.push(s3);

console.log(sArr);

// set : 집합 
// 배열 VS 셋 : 중복 여부의 차이
let array = [1, 2, 3, 2, 1];
let set1 = new Set(array);

console.log(array);
console.log(set1);

set1.add(10);
console.log(set1);
console.log(set1.has(10));
set1.delete(2);
console.log(set1);
set1.clear();
console.log(set1)

let stu1 = ["HTML", "CSS"];
let stu2 = ["HTML", "JS"];
let stu3 = ["React", "TS"];
let classes = [...stu1, ...stu2, ...stu3];
console.log(classes);
let classes_set = new Set(classes);
console.log(classes_set);
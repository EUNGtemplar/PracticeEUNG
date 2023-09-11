let num = []
num[0] = "일"
console.log(num);
// num[1] : 비워짐
num[2] = "삼";
console.log(num);
console.log(num.length);

// 배열용 foreach()
let numbers = ["피자","치킨","탕수육","맥주"];
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}
numbers.forEach(number=>{
    console.log(number);
})

// 이터러블(배열도 이터러블 중 하나 : for of 문으로도 가능

numbers.forEach((number, i)=>{
    console.log(`${i}번째 데이터 : ${number}`);
})

numbers.forEach((number, i)=>{
    // if (number == '탕수육') break;
    console.log(`${i}번째 데이터 : ${number}`);
})
// forEach 는 break/continue가 적용되지 않음.
// break/continue 사용할 시 for of 문 사용해야함.


//concat 배열 추가 ---------------------------
a = [1, 2, 3]
b = [7, 8, 9]
c = [10, 11]
d = a.concat(b, c)
console.log(d);
//순서를 바꿔 배열을 정렬할 수 있다.
e = a.concat(c, b)
console.log(e);

//전개 연산자
let patty = ["닭", "소고기", "돼지", "피쉬"] 
let vegitable = ["토마토", "양파", "양상추"]
//let bread = ["샌드위치 빵", "햄버거 빵", "핫도그 빵"]

let burger = ["햄버거 빵", patty, vegitable]
console.log("burger: "+burger);
console.log("burger: "+burger.length);
let burger2 =  ["햄버거 빵", ...patty, ...vegitable]
console.log("burger2 : " +burger2);
console.log("burger2: "+burger2.length);

let my_data = [1, 2, 3, 4, 5];
const data_sum = (a, b, c, d, e) =>{
    return a + b + c + d + e;
}
console.log("data_sum: " + data_sum(my_data));
console.log("data_sum: " + data_sum(...my_data)); //전개 연산자


//리버스 하여 정렬 .reverse---------------
let my_data_rev = my_data.reverse()
console.log("my_data_rev : "+ my_data_rev);


// 정렬 . sort--------------------------
let my_data_not_sorted = [5, 2, 4, 1, 3];
console.log("sort : "+my_data_not_sorted.sort())
a_week = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]
console.log("sort : " + a_week.sort());

let fruits_basket = ["사과", "바나나", "배"];
fruits_basket2 = fruits_basket;
fruits_basket2[1] = "망고"
console.log(`fruits_basket2: ${fruits_basket2}`)
console.log(`fruits_basket1: ${fruits_basket}`)
//얕은 복사: 얕은 복사를 하게 되면 똑같은 데이터가 된다.


let new_fruits_basket = ["사과", "바나나", "배"];
new_fruits_basket2 =[...new_fruits_basket]// 깊은 복사
new_fruits_basket2[1] = "망고"
console.log(`new_fruits_basket2: ${new_fruits_basket2}`)
console.log(`new_fruits_basket1: ${new_fruits_basket}`)
// 깊은 복사를 하면 다른 이름의 다른 데이터가 된다. 


let my_data_not_sorted2 = [52, 23, 4, 11, 3];
console.log("sort : " + my_data_not_sorted2.sort())
// code run -> sort : 11,23,3,4,52 (문자열 정렬)
console.log("sort : " + my_data_not_sorted2.sort(
    (a, b)=>{return a-b;}
))


// Symbol

const id = Symbol("id");
const tel = Symbol("tel");

const member={
    name:"eung",
    [id]: 1234,
    [tel]: 10123456789
}
for(item in member){
    console.log(item + ":" +member[item])
}

// Symbol은 조회가 되지 않는다.
console.log(member[id]);

// 구조 분해 할당 (distructing 디스트럭팅)
let fruits = ["사과", "샤인머스켓"];
let apple = fruits[0];
let musket = fruits[1];

//할당0
let [apple2, musket2 ] = fruits;
console.log(apple2 +" / " +musket2);

let [a, b ] = [];
console.log(a +" / " + b);

//할당1
let season = ["봄", "여름", "가을", "겨울"]
let [spring,,,winter] = season;
console.log(spring + "/" + winter)

//할당2
let jo3 = ["이정윤", "박효연", "박현응", "남흔지", "김다미"];
let [jo_leader, ...jo_member] = jo3; 
console.log(jo_leader);
console.log(jo_member);

// Swap
let x = 10;
let y = 20;
let tmp = 0;
tmp = y;
y = x;
x = tmp;
console.log(x + "/" + y);
[x, y] = [y, x]
console.log(x + "/" + y);

const student ={
    name : "서호준",
    gpa : 4.5
}
let S_name = student.name;
let gpa = student["gpa"];
console.log(S_name + "/" + gpa)

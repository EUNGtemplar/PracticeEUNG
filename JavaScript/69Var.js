var currentYear;
var a, b, c; 
a = 1;
b = 2;
c = 3;

var d = 4;
//----------------기본형 타이핑 ----------------------
var e = 5; // 숫자형 타이핑 - 정수형 
var e2 = 5.2 // 숫자형 타이핑 - 실수
var f = 'hello'; // 문자형 타이핑
var g = true; // true, false 참 거짓 타이핑

//----------------복합형(복수) 타이핑 -----------------
var season = ["봄", "여름", "가을", "겨울"]; //문자형 단일
var student = {stu_name:"박현응", gpa:4.5} //문자형, 숫자형 여러 타입

//----------------특수형 타이핑 ----------------------
undefined //변수 선언, 값 할당 X : 공간은 있으나 값이 없음
null // 값이 유효하지 않다. 

var season = ["봄", "여름", "가을", "겨울"];
console.log(season)
console.log(student[1])
console.log(student.gpa)

let h = 10; 
const k = 20; 

// var a_var = 'hello';
// console.log(a_var);

// var a_var = '100'
// console.log(a_var) //var 중복 타이핑 시 그대로 타이핑됨


// let a_let = 200;
// console.log(a_let);

// let a_let = "hello";
// console.log(a_let); //let 중복 타이핑 시 빨간색 언더바 생성됨

const auth_num = 120; 
auth_num = 100; //해킹사례 const 로 정의한 값은 변경 시 error 발생
if (auth_num == 100){
        console.log("유료 버전 동작")}

else { console.log ("유료 버전을 구매하세요.")}
/*
function addNumber(){
    var sum = 10 + 20; // 지역 변수:로컬 변수
    sum2 = 10 + 30; // 전역 변수:글로벌 변수
}

addNumber()
console.log(`sum2 : ${sum2}`);
console.log(`sum : ${sum}`)
*/

// 호이스팅
/*var x = 10;
function test_hoist(){
    var z = 5;
    console.log(`z: ${z}`);
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
    var y = 20;
}
test_hoist()
*/


// var: 지역(local) 변수 - 함 수 안에서만 쓰임 
// var X : 전역 (global) 변수

/*
function calcSum(n)//n:매개변수(parameter)
{
    let sumVal = 0;
    for(let i = 1; i <= n; i++){
        sumVal += i;
    }
    console.log(`sumVal(1):${sumVal}`); 
}
calcSum(10)//인수(argument);
console.log(`sumVal(2):${sumVal}`)
*/

/*
function calcSum2(n)
{
    let sumVal = 0;
    for(let i = 1; i <= n; i++){
        sumVal += i;
    }
    return sumVal;
}
let retVal = calcSum2(10)
console.log (`sum : ${retVal}`);

// 매개변수 기본값 설정 
function insertStudentInfo(name, hacbun, juso,jeongong = "IT", hangnyun = 1){

}
insertStudentInfo("김멀캠", 1234, "한국", "전산", 3)
insertStudentInfo("김캠멀", 2345, "한국",)
// insertStudentInfo로 신입생 인적 사항 등록 -> 학년 전공이 같다.
*/

/*
function multiple(a, b = 5, c = 10){
    return a + b + c;
}
console.log(multiple(1))
*/



//익명함수 
/*let sum_func = function ( a, b){
    return a + b;
}

console.log(sum_func(1, 2));
*/

//즉시 실행 
/*
(function(a, b){
    sum = a + b;
}(1, 2))
console.log(sum);
*/


// => 표시 
/*
let sum_func = (a, b) => {
    return a + b
}
*/

// 화살표 함수 (ES 6) 매개변수 0개일 때
const hi = function(){return "hi"};
const hi2 = () => { return "hi"};
const hi3 = () => "hi" ; 

// 화살표 함수 (ES 6) 매개변수 1개일 때
const hi4  = function(user){console.log(`hi${user}`)}
const hi5 = (user) => {console.log(`hi ${user}`)}
const hi6 = user => {console.log(`hi${user}`)}

// 화살표 함수 (ES 6) 매개변수 2개 이상일 때 
const hi7 = function(a, b) {return a + b;}
const hi8 = (a, b) => {return a + b;}
// 5/3 몫:1 나머지:2 
// 5/3 1.6666....

let number369 = [1,2,3,4,5,6,7,8,9,10];
if (number369[0] % 3 == 1){
    console.log(number369[0]);
} //1, 4, 7 : 3으로 나눈 나머지가 1
if (number369[1] % 3 == 2){
    console.log(number369[1]);
} //2, 5, 8 : 3으로 나눈 나머지가 2
if (number369[2] % 3 == 0){
    console.log("박수 짝!");
} //3, 6, 9 : 3으로 나눈 나머지가 0
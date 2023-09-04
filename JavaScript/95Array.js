// page.69참고 

var numbers = new Array () // numbers = []
numbers2 = new Array(4)
numbers3 = [1, 2, 3, 4, 5]
numbers4 = Array(1, 2, 3, 4, 5)
console.log(numbers4.length)

let num = ["일", "이", "삼", "사"];
for(let i = 0; i < num.length; i++){
    console.log(num[i]);
}
//concat : 배열 + 배열 => 배열.
a = [1, 2, 3]
b = [7, 8, 9]
console.log(a+b);
c = a.concat(b) 
console.log(c);

//join : 배일요소 -> 문자열 하나로 구성.
a = ['010', '1234', '5678']
let a_join = a.join('-')
console.log(a_join);

//배열추가 push , unshift
a = [1, 2, 3]
a.push(4, 5)
console.log (a)

a3 = a.unshift(0)
console.log(`a : ${a} , ${a3}개`)

//배열 꺼내기 pop(), shift()
// pop : 뒤가 나온다. | shift : 앞이 나온다.
chars = ["a", "b", "c", "d"]
popped = chars.shift();
console.log(`${popped}가 나오고 ${chars}가 남았다.`)

//임의 조작 - 원하는 위치에 추가-삭제 splice()
// case 1 : 인수 1개일 때 
numbers = [1, 2, 3, 4, 5]
a = numbers.splice(2) // 2번 인덱스 이후로 전부 
console.log(`얻은 것:${a}남은 것:${numbers}`)
// case 2 : 인수 2개일 때
numbers = [1, 2, 3, 4, 5]
a = numbers.splice(2, 1) // 2번 인덱스 이후로 1개 
console.log(`얻은 것:${a}남은 것:${numbers}`)
// case 3 : 인수 3개일 때
numbers = [1, 2, 3, 4, 5]
a = numbers.splice(2, 1, 30) // 2번 인덱스 이후로 1개 추출, 그 자리에 30 치환 
console.log(`얻은 것:${a} | 남은 것:${numbers}`)

// slice : 원본 유지
numbers = [1, 2, 3, 4, 5]
a = numbers.slice(2) // 
console.log(`얻은 것:${a} | 남은 것:${numbers}`)

numbers = [1, 2, 3, 4, 5]
a = numbers.slice(2, 4) // 2번 이상 - 4번 미만 
console.log(`얻은 것:${a} | 남은 것:${numbers}`)
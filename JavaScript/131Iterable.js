// 이터레이터
// 이터러블(Iterable) : 순서사 있어 순차적으로 처리 가능
// Iterable Object : Array, Map , Set 

// for of (Iterable O) VS for in(Iterable X)

let mes_hi = "hello";
for (let char of mes_hi){
    console.log(char);
}
let chArr = [...mes_hi];
console.log(chArr.length + chArr[1]);

let [ch0, ch1, ch2] = mes_hi;
console.log(ch0 + "," + ch1 + "," + ch2)

arr = [1, 2, 3];
let it = arr[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

// 제너레이터 : 일반 객체(이터러블 x) 를 이터러블 하게 만드는 것.
// yield

const fn1 = () =>{
    console.log(1);
    console.log(2);
    console.log(3);
}

fn1();

function* gen1(){
    yield "가나";
    yield "다라";
    yield "바사";
}
let g1 = gen1()
console.log(g1.next())

let g2 = gen1();
for (let i of g2){
    console.log(i);
}

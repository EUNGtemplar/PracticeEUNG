// Map 자료형 (이터러블 가능) 
// JS의 객체와 비슷 (이터러블 불가능)
// 

let bag = new Map();
bag.set("color", "red"); // bag = {color : "red"}
console.log(bag);

let bag2 = { color : "red" }
console.log(bag2)

let cup = new Map([
    ["color", "red"],
    ["handle", true],
    ["material", "ceramic"],
    ["size", "500ml"],
]);
console.log(cup);
cup.set("owner", "hj");
console.log(cup);
cup.set("brand", "bone").set("price", 10000);
console.log(cup);

console.log(`cup size : ${cup.size}`)
console.log(cup.get('price'))
console.log(cup.has('material'))
console.log(cup.has('material2'))
console.log(cup.delete('material'))
console.log(cup.delete('material'))

for(let key of cup.keys()){
    console.log(key)
}
for(let value of cup.values()){
    console.log(value)
}
for(let entry of cup.entries()){
    console.log(entry)
}

cup.clear()
console.log(cup)
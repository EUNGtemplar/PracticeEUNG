20231023 --

// promise all 개념 (callback 블록)

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2]).then(
(res)=>{console.log(res);})

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.reject('실패2');
const promise3 = Promise.resolve('성공3');
Promise.all([promise1, promise2, promise3]).then(
(res)=>{console.log(res);})
.catch((res)=>{console.log(res);})

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.reject('실패2');
const promise3 = Promise.resolve('성공3');
Promise.allSettled([promise1, promise2, promise3]).then(
(res)=>{console.log(res);})
.catch((res)=>{console.log(res);})

// async/await 방식
function findAndSaveUser(Users){
    Users.findOne({})
    .then ((user)=>{user.name = 'zero'; return user.saver();})
    .then ((user)=>{return Users.findOne({gender.'m'});})
    .catch(err=> {console.log(err);})
}

async function findAndSaveUser(Users){
    let user = await Users.findOne({})
    user.name = 'zero';
    user = await user.save(); 
    user = await Users.findOne({gender:'m'});
}

async function findAndSaveUser(Users){
    try{
    let user = await Users.findOne({})
    user.name = 'zero';
    user = await user.save(); 
    user = await Users.findOne({gender:'m'});}
    catch(err){console.log(err);}
}

const findAndSaveUser = async (Users) =>{
    try{
    let user = await Users.findOne({})
    user.name = 'zero';
    user = await user.save(); 
    user = await Users.findOne({gender:'m'});}
    catch(err){console.log(err);}
}

const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2]).then(
(res)=>{console.log(res);})
->
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await( p of [promise1, promise2]){
        console.log(p);
    }
})();

// page.84
// ?? 널 병합 -> || 연산자 대응

const a = 0;
const b = a || 3;
console.log(b);

const a = 1;
const b = a || 3;
console.log(b);

const c = 0;
const d = c ?? 3;
console.log(d);

const c = null;
const d = c ?? 3;
console.log(d);

// 옵셔널 체이닝
const c = null;
c.d

const c = null;
try{
    c,d
}catch(e){console.log(e);}

//page.86
// XML VS json

<XML>
    <guests>
        <firstname> DJ</firstname>
        <lastname> oh</lastname>
    </guests>
    <guests>
        <firstname> JS</firstname>
        <lastname> shin</lastname>
    </guests>
    <guests>
        <firstname> SY</firstname>
        <lastname> lim</lastname>
    </guests>
</XML>

// JS 객체 
JOSN{"guests":[{"guests":{"firstname":"DJ", "lastname":"oh"}},{"guests":{"firstname":"SJ", "lastname":"shin"}},{"guests":{"firstname":"SY", "lastname":"lim"}}
]}

const testJson = '{"guests":[{"guests":{"firstname":"DJ", "lastname":"oh"}},{"guests":{"firstname":"SJ", "lastname":"shin"}},{"guests":{"firstname":"SY", "lastname":"lim"}}]}';

const testObj = JSON.parse(testJson);

// page.89 
encodeURIComponent: 한글 -> %EB~~~~~ 변환
decodeURIComponent: %EB~~~~~~ -> 한글 

// page. (4-1)
const http = require('http');
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>Title test</h1>')
    res.write('<p>내용 문단</p>')
    res.write('<p>내용 문단</p>')
    res.end()
}).listen(
    8080, ()=>{
        console.log('서버 로그: 포트 8080에서 대기 중이다.')}
)
const http = require('http');
const fs = require('fs').promises;

//cookie => A = B; C = D
const parseCookies = (cookie = "")=>
    cookie.split(";")
        .map(v => v.split('='))
        .reduce((acc, [k, v])=>{
            acc[k,trim()] = decodeURIComponent(v);
            return acc;
        },{});

http.createServer(
    async (req, res)=>{
        const cookies = parseCookies(req.headers.cookie);
        if (req.url.startsWith('/login')){
            const url = new URL(req.url, 'http://127.0.0.1:8081')
            const name = url.searchParams.get('name');
            const expires = new Data();
            expires.setMinutes(expires.getMinutes()+5);
            res.writeHead(302, {
                location: '/',
                'Set-cookie':`name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`
            });
            console.log("쿠키 생성")
            res.end();
        }
        else if(cookies.name){
            res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
            res.end(`${cookies.name}님 쿠키 확인됨.`);
        }
        else{ // html contents 
            try{
                const data = await fs.readFile('rage154.html');
                res.writeHead(200, {'Content-type':'text/html;charset=utf-8'});
                res.end(data);
            }
            catch(err){
                res.writeHead(500, {'Content-type':'text/html;charset=utf-8'});
                res.end(err.message);

            }
        }
        console.log(cookies);
    }
).listen(8081, ()=>{console.log('서버 시작됨');})
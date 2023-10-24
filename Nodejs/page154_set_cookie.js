const http = require('http');

http.createServer(
    (req, res)=>{
        console.log(req.url, req.headers.cookie);
        res.writeHead(200,{'Set-Cookie':'mycookie=test'});
        res.end('쿠키를 사용해 봅시다.')
    }
).listen(8081, ()=>{console.log('서버가 시작되었습니다.')})
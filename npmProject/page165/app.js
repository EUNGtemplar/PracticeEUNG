// page165_app.js -page280 nunjucks

const express = require('express');

const app = express();
app.set('port', process.env.PORT||3000);

//nunjuscks
const nunjucks = require('nunjucks');
app.set('view engine', 'html');
nunjucks.configure('views',
    {
        express:app,
        watch:ture
    }
);


const indexRouter = require('./routes/home'); 
const userRouter = require('./routes/user');

app.use('/', indexRouter); // ~:3000/
app.use('/user', userRouter); // ~:3000/user

app.use((req,res,next)=>{
    res.status(404).send("NOT FOUND!");
});

app.listen(app.get('port'),
    ()=>{
        console.log("넌적스 적용 서버가 시작됨.")
    }
);
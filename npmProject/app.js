const express = require('express');
const {sequelize} = require('./models');

const path = require('path');
const nunjucks = require('nunjucks');
const indexRouter = require()

const app = express();
app.set('port', process.env.PORT || 3000);

sequelize.sync({force: false}).then(
    ()=>{console.log("DB 연결")}
).catch(
    (err)=>{console.log(err);}
);

app.listen(app.get('port'),
    ()=>{console.log("서버 시작")}
);
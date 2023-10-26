const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/',(req,res)=>{
    res.send('<p>hello, express! wow!</p>')
});

app.listen(app.get('port'),()=>{
    console.log('Wellcome, Express')
});

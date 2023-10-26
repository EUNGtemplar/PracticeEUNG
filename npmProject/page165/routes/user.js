// page.164_app.js -page.265

const express = require('express');
const router = express.Router();

// 이전 방법 app.get(); 비교 
router.get('/', //127.0.0.1:3000/user
    (req, res)=>{
        res.send("<p>user page</p>")
    }
);

router.get('/:id',
    (req,res)=>{
        res.send(`<p>user ${req.params.id} page</p>`);
    });

    // 127.0.0.1:3000/:id (x) // 127.0.0.1:3000/user/123 (o)

module.exports = router;
// page.164_app.js -page.265

const express = require('express');
const router = express.Router();

// 이전 방법 app.get(); 비교 
router.get('/',
    (req, res)=>{
        res.send("<p>home page</p>")
    }
);

module.exports = router;
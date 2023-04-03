const express = require('express');
const router = express.Router() 

router.get('/product',(req,res)=>{
    //code
    res.send('hello routes')
})


module.exports = router;
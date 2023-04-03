const express = require('express');
const router = express.Router() 

router.get('/auth',(req,res)=>{
    //code
    res.send('hello routes')
})
router.post('/auth',(req,res)=>{
    //code
    res.send('hello routes')
})
router.put('/auth',(req,res)=>{
    //code
    res.send('hello routes')
})
router.delete('/auth',(req,res)=>{
    //code
    res.send('hello routes')
})


module.exports = router;
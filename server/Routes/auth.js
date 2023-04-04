const express = require('express');
const router = express.Router() 
const { createAndUpdateUser } = require('../Controllers/auth')


/*
Endpoint http://localhost:5000/api/auth
access
method GET
*/

router.get('/auth',createAndUpdateUser)
// router.post('/auth',createAndUpdateUser)
// router.put('/auth',createAndUpdateUser)
// router.delete('/auth',createAndUpdateUser)


module.exports = router;
const express = require('express')
const router = express.Router();
const { createUser } = require('../controller/registeredperson.js');




router.post('/createUser', createUser)


module.exports = router

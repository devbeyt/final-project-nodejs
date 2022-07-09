const express = require('express')
const router = express.Router();
const controller = require('../controller/signUpController')

router.get('/signUp',controller.signupGet)
router.post('/signUp',controller.signupPost)



module.exports = router;
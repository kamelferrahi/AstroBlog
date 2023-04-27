const express = require('express')
const router = express.Router()

const {
    signUpClient
   } = require('../controllers/SignupController')
router.route('/').post(signUpClient)

module.exports = router
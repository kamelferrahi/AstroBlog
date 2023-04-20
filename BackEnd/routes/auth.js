const express = require('express')
const router = express.Router()
const events = require('events');

const {
 loginClient
} = require('../controllers/LoginController')
router.use(express.static('./vue/login'))
// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').post(loginClient)

module.exports = router
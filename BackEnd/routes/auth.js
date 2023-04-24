const express = require('express')
const router = express.Router()
const events = require('events'); 
path = require('path')

const {
 loginClient
} = require('../controllers/LoginController')
//router.use(express.static(path.join(__dirname, '..', '..','FrontEnd', 'public','index.html')))
//router.route('/').get((req,res) => {
   // res.sendFile(path.join(__dirname, '..', '..','FrontEnd', 'public','index.html'))
//})
// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').post(loginClient)

module.exports = router
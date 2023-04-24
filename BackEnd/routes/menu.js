const express = require('express')
const router = express.Router()
const events = require('events');
const authenticationMiddleware = require('../Utils/JWT')

//const {
  
//} = require('../controllers/Menu')

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)*
//router.use(express.static('../vue'))
const error =(error,req,res,next)=>{
    console.log(error)
    res.redirect('/')
}
router.use([authenticationMiddleware])
router.use(error)


router.route('/').get(error,(req,res) =>{
    
})
//router.route.event()
module.exports = router
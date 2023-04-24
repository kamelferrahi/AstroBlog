const express = require('express')
const app = express()

const menu = require('./routes/menu')
const auth = require('./routes/auth')
const signup = require('./routes/signup')
const dba = require('./Utils/mySQL')
dba.connectToDba()
// static assets
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
//app.get('/',(req,res)=>{res.redirect('/')})
app.use('/menu', menu)
app.use('/', auth)
app.use('/signup',signup)
app.listen(5000, () => {
  console.log('Server dis listening on port 5000....')
})
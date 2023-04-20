const express = require('express')
const app = express()

const menu = require('./routes/menu')
const auth = require('./routes/auth')
const dba = require('./Utils/mySQL')
dba.connectToDba()
// static assets
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
app.get('/',(req,res)=>{res.redirect('/login')})
app.use('/menu', menu)
app.use('/login', auth)
app.listen(5000, () => {
  console.log('Server dis listening on port 5000....')
})
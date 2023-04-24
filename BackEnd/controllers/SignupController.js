const { response } = require('express')
const { Client} = require('../Utils/mySQL')
const  Utilisateur = require('../models/Utilisateur/Utilisateur')
const bcrypt = require("bcrypt")
const saltRounds = 10

const signUpClient = async (req,res) =>{
    const nom  = req.body.username
    const mail = req.body.email 
    const psw = req.body.password
    const psw_c= req.body.password_c
    const about = req.body.about 
    const date = new Date();
    let result = await Utilisateur.selectUtilisateur(nom)
   
    if (result != undefined){
        return res.json({
            usernameExist: true,
          });
    }
    result = await Utilisateur.selectUtilisateur(mail)

    if (result != undefined){
        return res.json({
            mailExist: true,
          });
    }

    if (psw != psw_c) {
        return res.json ({
            passwordc: false
        })
    }

    const hash_psw = bcrypt.genSalt(saltRounds)
    .then(salt => {
        return bcrypt.hash(psw, salt)
    })
    .then(async hash =>  {
        await Utilisateur.addUtilisateur(mail,nom,hash, date.toISOString().split('T')[0],about)
        res.json({Created: true})
    })
    .catch(err => console.error(err.message))
    

}

module.exports = {signUpClient}
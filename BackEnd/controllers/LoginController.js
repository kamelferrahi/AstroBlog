const { response } = require('express')
const { Client} = require('../Utils/mySQL')
const  Utilisateur = require('../models/Utilisateur/Utilisateur')
const bcrypt = require("bcrypt")
const saltRounds = 10
const jsonwebtoken = require('jsonwebtoken')

const JWT_SECRET =
  "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";
const loginClient =  async (req,res) => {
    const result = await Utilisateur.selectUtilisateur(req.body.uname)
    //bcrypt.genSalt(saltRounds)
    /*.then(salt => {
        console.log('Salt: ', salt)
        return bcrypt.hash("12123", salt)
    })
    .then(hash => {
        console.log('Hash: ', hash)
    })
    .catch(err => console.error(err.message))*/
    if (result == undefined) {
        //const result = await Utilisateur.selectUtilisateurMail(req.body.uname) 
        
        if (result == undefined) {
            return res.status(401).json({
                error: "Email ou pseudo non existant",
              });
        }
    }
    const psw = req.body.psw
    bcrypt
      .compare(psw, result.motDePasse)
      .then(response => {
         if (response){
            return res.json({
                token: jsonwebtoken.sign({username: result.pseudoUtilisateur}, JWT_SECRET,{
                    expiresIn: '30d',
                  }),
              });
        
        }
        return res.status(401).json({
            error: "Mot de passe érroné",
          });
      })
}

module.exports = {loginClient}
const {insertQuery, selectQuery} = require('../../Utils/mySQL')

const  selectUtilisateur = async (nom) =>{
    return await selectQuery("SELECT * FROM Utilisateur where pseudoUtilisateur = ? or email = ? ",[nom,nom])
    
}

const selectUtilisateurMail = async (mail) =>{
    return await selectQuery("SELECT * FROM Utilisateur where email = ?",[mail])
}

const addUtilisateur = async (email,pseudoUtilisateur,motDePasse,dateCreation,typeCompte) => {
    return await insertQuery(`INSERT INTO Utilisateur(email,pseudoUtilisateur,motDePasse,dateCreation,typeCompte)
    VALUES(?,?,?,?,?)`,[email,pseudoUtilisateur,motDePasse,dateCreation,typeCompte])
}

module.exports = {selectUtilisateur,selectUtilisateurMail,addUtilisateur}
const { selectQuery} = require('../../Utils/mySQL')

const  selectUtilisateur = async (nom) =>{
    return await selectQuery("SELECT * FROM Utilisateur where pseudoUtilisateur = ? or email = ? ",[nom,nom])
    
}

const selectUtilisateurMail = async (mail) =>{
    return await selectQuery("SELECT * FROM Utilisateur where email = ?",[mail])
}

module.exports = {selectUtilisateur,selectUtilisateurMail}
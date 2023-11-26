const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "annonces"
});

const createAnnonce = (nomProduit, prix, dateMiseEnVente, nomVendeur) =>{
    var result = [];
    result = connection.query(`INSERT INTO annonce (NomProduit,prix,dateMiseEnVente,NomVendeur) VALUES (${nomProduit},${prix},${dateMiseEnVente},${nomVendeur});`)
    return result;
};
    
createAnnonce("'ballon'",10,"'2023-11-23'","'Tom'")



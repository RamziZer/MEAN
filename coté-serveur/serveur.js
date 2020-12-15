const express = require('express');
const app     = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});
//app.use(require("cors"));

const MongoClient = require('mongodb').MongoClient;
const ObjectID    = require('mongodb').ObjectId;
const url         = "mongodb://localhost:27017";
 
MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true} , (err, client) => {
    let db = client.db("SUPERVENTES");

    /* Liste des produits */
    app.get("/produits", (req,res) => {
        console.log("/produits");	
        res.setHeader("Content-type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        try {
            db.collection("produits").find().toArray((err, documents) => {
                res.end(JSON.stringify(documents));
            });
        } catch(e) {
            console.log("Erreur sur /produits : " + e);
            res.end(JSON.stringify([]));
        }
    });

    /* Liste des catégories de produits */
    app.get("/categories", (req,res) => {
        console.log("/categories");	
        res.setHeader("Content-type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
	categories = [];
        try {
            db.collection("produits").find().toArray((err, documents) => {
		for (let doc of documents) {
                    if (!categories.includes(doc.type)) categories.push(doc.type); 
		}
		console.log("Renvoi de"+JSON.stringify(categories));
                res.end(JSON.stringify(categories));
            });
        } catch(e) {
            console.log("Erreur sur /vategories : " + e);
            res.end(JSON.stringify([]));
        }
    });

    /* Connexion */
    app.post("/membre/connexion", (req,res) => {
        console.log("/utilisateurs/connexion avec "+JSON.stringify(req.body));	
        res.setHeader("Content-type", "application/json");
        res.setHeader("Access-Control-Allow-Origin", "*");
        try {
            db.collection("membres")
            .find(req.body)
            .toArray((err, documents) => {
                if (documents.length == 1)
                    res.end(JSON.stringify({"resultat": 1, "message": "Authentification réussie"}));
                else res.end(JSON.stringify({"resultat": 0, "message": "Email et/ou mot de passe incorrect"}));
            });
        } catch (e) {
            res.end(JSON.stringify({"resultat": 0, "message": e}));
        }
    });
    /* Inscription */
    app.post("/inscription",(req,res)=> {
        console.log(req.body);
        try {
            db.collection("membres")
                .find(req.body)
                .toArray((err, documents) => {
                    if (documents != undefined && documents.length == 1)
                        res.end(JSON.stringify({ "resultat": 1, "message": "Déjà inscrit" }));
                    else {
                        db.collection("membres")
                            .insertOne(req.body);
                        res.end(JSON.stringify({ "resultat": 1, "message": "Inscription réussie" }))
                    }
                });
        } catch (e) {
            res.end(JSON.stringify({ "resultat": 0, "message": e }));
        }
    });
});

app.listen(8888);

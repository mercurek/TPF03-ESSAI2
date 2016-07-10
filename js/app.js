// Code du TPF02
var liste;

function nouvelleTransaction(){
    liste = [];
}

function commanderCafe(nom){
    liste.push(nom);
}

function lecturePremierCafe(){
    var premierCafe = liste.shift();
    return premierCafe;
}

function terminerTransaction() {
    liste = undefined;
}

//Code du TPF03
//Partie 1 - Création de cinq objets Coffee
var coffeeColombien = {
nom: "Colombien",
nbLait: 2,
nbSucre: 3,
prix: 2.5,
nomCommandeur: "Alexis",
}
console.info(coffeeColombien);


var coffeeMelangeMaison = {
nom: "Mélange maison",
nbLait: 1,
nbSucre: 1,
prix: 2,
nomCommandeur: "Guillaume",
}
console.info(coffeeMelangeMaison);


var coffeeLatte = {
nom: "Latte",
nbLait: 2,
nbSucre: 1,
prix: 2.75,
nomCommandeur: "Dominique",
}
console.info(coffeeLatte);


var coffeeCappuccino = {
nom: "Cappuccino",
nbLait: 1,
nbSucre: 2,
prix: 3.25,
nomCommandeur: "Stéphane",
}
console.info(coffeeCappuccino);


var coffeeMocha = {
nom: "Mocha",
nbLait: 1,
nbSucre: 3,
prix: 3.5,
nomCommandeur: "Doris",
}
console.info(coffeeMocha);


//Partie 2 - Fonction « Constructeur »
//Objets de type « Café »
function Cafe (nom, nbLait, nbSucre, prix, nomCommandeur){
	this.nom = nom;
	this.nbLait = nbLait;
	this.nbSucre = nbSucre;
	this.prix = prix;
	this.nomCommandeur = nomCommandeur;
}
 
var coffeeColombien = new Cafe("Colombien", 2, 3, 2.5, "Alexis");
var coffeeMelangeMaison = new Cafe("Mélange maison", 1, 1, 2, "Guillaume");
var coffeeLatte = new Cafe("Latte", 2, 1, 2.75, "Dominique");
var coffeeCappuccino = new Cafe("Cappuccino", 1, 2, 3.25, "Stéphane");
var coffeeMocha = new Cafe("Mocha", 1, 3, 3.5, "Doris");

//Objets de type « Transaction »
var liste = [];

function Transaction (nomInitiateur){
    liste = []; //0 à plusieurs commandes de cafés

}
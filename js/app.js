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
//Création de cinq objets Coffee
var coffeeColombien = {
nom: "Colombien",
nblait: 2,
nbsucre: 3,
prix: 2.5,
commandeur: "Alexis",
}
console.info(coffeeColombien);


var coffeeMelangeMaison = {
nom: "Mélange maison",
nblait: 1,
nbsucre: 1,
prix: 2,
commandeur: "Guillaume",
}
console.info(coffeeMelangeMaison);


var coffeeLatte = {
nom: "Latte",
nblait: 2,
nbsucre: 1,
prix: 2.75,
commandeur: "Dominique",
}
console.info(coffeeLatte);


var coffeeCappuccino = {
nom: "Cappuccino",
nblait: 1,
nbsucre: 2,
prix: 3.25,
commandeur: "Stéphane",
}
console.info(coffeeCappuccino);


var coffeeMocha = {
nom: "Mocha",
nblait: 1,
nbsucre: 3,
prix: 3.50,
commandeur: "Doris",
}
console.info(coffeeMocha);
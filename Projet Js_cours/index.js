// commentairesur une ligne

/*
commentaires
sur
plusieurs
lignes
*/

                /* Types */
var num = 17; // Type num
var name = "Je m'appelle Darryl-win"; // Type String
var alias = "Je suis 'Fuck Society' ";

var Etudiant = {  // Type objet 
    nom:"Shinomyia",
    sexe: 'M',
    age: 16
}

                    /* Les Opérateurs */

var a = 99;
var b = num % 2;

                    /*Affichage */
console.log(alias);
console.log(b)

// Incrémentation

a++;
b--;
console.log(a);
console.log(b);

num += a;
console.log(num);

    // Acces aux proprietés d'un objet 

console.log(Etudiant.nom,'a',Etudiant.age,'ans et est de sexe',Etudiant.sexe);

// ou

console.log(Etudiant["nom"],'a',Etudiant["age,"],'ans et est de sexe',Etudiant["sexe"]);

// if

if (Etudiant.age == 18){
    console.log("est majeur");
}
else{
    console.log("age différent de 18 ans");
}

// La structure switch

var age = 0

switch(true) {
    case age < 5:
        
        console.log("Ohh my Baby");
        break;  // A chaque case on doit terminer par un break

    case age < 10:
        
        console.log("Mioche");
        break;

    default:

        break;
}

var i = 0

while (i < 10){
    console.log(i);
    i++;
}

i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);

// Structure for

console.log("======Structure for======")

for (let index = 10; index >= 0; index--) {

//for (let index = 0; index < 10; index++) {
    console.log(index);
}

console.log("======Contexte for pour un Objet======")

for (const key in Etudiant) {
    console.log(Etudiant[key]); // Avec ceci nous pourrons parcourrir toutes les propriétés de l'objet
}

                /* Les tableaux */ 

                console.log("======Les tableaux======")

var tableau_1 = Array(18,12,5,2);
var tableau_2 = [12,54,87,'Ayanokoji'];
var fruits = new Array("banane",'orange','Ananas',"Mandarine","Grenade","Pomme");

console.log(tableau_1[0]);

                /* Utiliser for pour parcourir un tableau */

console.log("==Parcourir un tableau==")

for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index]);
}

// Quelques fonctions des tableaux

console.log("Nombre de fruits: ",fruits.length);

console.log("Nouveaux fruit : ",fruits.push("Kiwi","pomme")); // on peut ajouter +++ elements à la fin du tableau avec la fonction push
console.log(fruits);

console.log(fruits.unshift("Orange","Mangue","Mandarine","Pamplemouse")); // ajoute des elements au debut du tableau
console.log(fruits);

console.log(fruits.shift()); // suppimme le 1er élement du tableau
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

console.log(fruits.sort); // tri de tableau
console.log(fruits);

                // Les fonctions en javascript
                console.log("------------Déclration de fonction en .js-----------");

function welcome() {
    console.log("Hello world!");
}
welcome();


/*
 Affichage d'un message
 @return [] n'affiche rien
*/
function ia(){
    console.log("Je suis une IA en cours de creation");
}
ia();

// funcction avec parametres


/*
@param a type entier
@param b type entier
@return {*}
*/
function somme(a,b){

    return a + b;
}
console.log(somme(4,5));
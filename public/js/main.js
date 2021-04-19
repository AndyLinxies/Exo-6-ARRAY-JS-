//Ex 1
//Suprrimer le dernier élément
let monTab = ['pomme', 'fraise', 'melon', 'citron']
monTab.pop()
console.log(monTab);

//Supprimer le 1er Element
monTab.shift();
console.log(monTab);

//Ajouter a la fin
monTab.push('mangue');
console.log(monTab);

//Ajouter au Debut
monTab.unshift('pamplemousse')
console.log(monTab);

//Mettre le 2e élement en Maj ne pas oublier() pour le uppercase
monTab[1]= monTab[1].toUpperCase();
console.log(monTab);

//Changer l'orde de l'array
monTab.reverse()
console.log(monTab);

//Exo 2
//Ordonner les chiffres Pas oublier ()!!!
let chiffres = [4, 5, 2, 1, 3];
chiffres.sort();
console.log(chiffres);
//Concatener les chiffres en un string Changer la variable de type Tableau en type String
chiffres=chiffres.join('-'); //il les join tous avec des tirets
console.log(chiffres);

//retouner un String en Array
chiffres=chiffres.split('-') //Qd il y a des tirets il cree un nouvel element du tableau
console.log(chiffres);

//parseInt() transforme Le string en Integer si c'est possible

//Exo 3

let tableau =[];
//Ajout de 10 elements
tableau.push("Andy","mangue","Banane","Orange","Cactus","Lorem","Vagabond","Chicha","Riz","Vibe");
console.log(tableau, tableau.length); //Affiche les deux sans devoir refaire Deux logs
console.log(tableau.indexOf('Andy')); //Trouver l'index d'un element
//supp elem grace a l'index
tableau.splice(0,1)
console.log(tableau);

//Creer tab vide et rajout de tout le monde
let tableau2 =[];
tableau2.splice(0,0,'Andy','Oussama','Dorian','Tania','Kev','Anthony','Junior','Alexis','Alain','Anis');
//Choisir aléatoirement qqun du tableau
console.log(tableau2[Math.floor(Math.random()*tableau2.length)]);
//Math.random il va choisir les elements de 0 non inclu à 1 non inclu donc cela ne va pas fonctionner car les index sont de 0 à 8
//Math.floor au tours pour pouvoir avoir des nombres entiers .si on a 0,99 on aura 0.
//On va multiplier tout ca par la longeur du tableau pour pouvoir aller de 0 à X nombre

//Supprimer Anis du tableau
tableau2.splice(tableau2.indexOf('Junior'),1);
console.log(tableau2);

//indexOf('Andy') va retourner l'index de Andy car on ne peut taper 'Andy' avec n'importe quelle autre méthode
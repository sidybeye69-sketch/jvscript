let eleves= ["sidy","jean","Mouhamed"]
console.log(eleves);
eleves.push("Fatou")
console.log(eleves);
eleves.pop()
console.log(eleves);
eleves.unshift("Moussa")
console.log(eleves);
eleves.shift()
console.log(eleves);


function somme(nombre1,nombre2) {
     return nombre1+nombre2
 }
 let n1 = parseFloat(prompt("saisir une valeur"))
 let n2 = parseFloat(prompt("saisir une autre valeur"))
 alert("la somme est de " + somme(n1,n2))

 function produit(nombre1,nombre2) {
     return nombre1*nombre2
 }
 let N1 = parseFloat(prompt("saisir une valeur"))
 let N2 = parseFloat(prompt("saisir une autre valeur"))
 alert("le produit des deux sommes est de " + produit(N1,N2))


let age= parseInt(prompt("saisir une age par defaut"))
if (age>=18) {
    
    alert ("Majeur")
} else {
   alert ("Mineur")
}
let nombre= parseInt(prompt("saisir un nombre"))
if (nombre>0) {
    alert ("Positif")
} else if (nombre<0){
    alert("Negatif")

} else{
    alert("zero")
}
function jourDeLasemaine(Jour) {
    switch (Jour) {
        case 1:
            alert ("lundi")
            break;
        case 2:
            alert ("Mardi")
            break;
        case 3:
            alert ("Mercredi")
            break;
        case 4:
            alert ("Jeudi")
            break;
        case 5:
            alert ("Vendredi")
            break;
        case 6:
            alert ("Samedi")
            break;
        case 7:
            alert ("Dimanche")
            break;                

        default:
            alert ("Invalide")
            break;
    }
}

let jour= Number(prompt("Saisir un jour par defaut"))
alert (jourDeLasemaine(jour))

function appreciationScolaire(Note) {
    switch (Note) {
        case "A":
            alert ("Exellent")
            break;
        case "B" :
            alert ("Bien")
            break;
        case "C" :
            alert ("Passable")
            break;
        case "D" :
            alert ("Insuffisant")
            break;
    
        default:
            return"note Invalide"
    }
}
let Note = (prompt("entrez une note A, B ,C ou D"))
alert (appreciationScolaire(Note))


 for (let i = 0; i <= 10;i++) {
           if (i % 2 === 0) {
            console.log(i);
           } 
        }
 for (let i = 1; i <= 5;i++) {
            console.log(i);
        }
 let i =5;
        while (i >= 1) {
            console.log(i);
            i--; 
            console.log("Decollage")
        }
 let i =1;
        while (i <= 3) {
            console.log(i);
            i++; 
        }
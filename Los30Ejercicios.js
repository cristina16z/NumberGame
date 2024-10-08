// 1. Fes un programa que demani un valor a l’usuari i indiqui si el valor és un número.
// Fes servir l’operador ternari per mostrar la informació.

let numero = prompt("Introdueix un número");
let numEnter = Number(numero);

textSortida = !isNaN(numEnter) ? "És un enter" : "No és un enter";

console.log(numEnter, typeof numEnter, textSortida);



//2.Fes un programa que demani un valor a l’usuari i indiqui si el valor és un enter o un decimal.

let numero = prompt("Introdueix un número");
let numEnter = Number(numero);

textSortida = Number.isInteger(numEnter) ? "És un enter" : "És un decimal";

console.log(numEnter, typeof numEnter, textSortida);



//3.Fes un programa que permeti realitzar la conversió entre temperatures de  ºC a ºF  i de ºF a ºC, d’acord amb la següent fórmula: 
//			ºF = (9.0/5.0)* (ºC)+32. 
// El programa ha de demanar a l’usuari quina conversió ha de fer (“C” o “F”) i la temperatura que es vol convertir.

let numero = prompt("Introdueix un número");
let numEnter = Number(numero);

let lletra = prompt("Quina conversió vols fer? (C) Graus Celcius o a (F) Graus Fahrenheit ? ");
let letraConversio = String(lletra);


let conversionF =  (9.0/5.0)* (numEnter)+32 
let conversionC = ((numEnter)-32) * 0.5556 

textSortida = letraConversio == 'F' ? conversionF : conversionC;

console.log( textSortida);



//4. Fes un programa que demani a l’usuari el temps total d’una trucada demanant primer els minuts i després els segons.
// Mostreu l’import sense IVA i calculant l’IVA (21%) sabent que la companyia telefònica
//cobra 10 cèntims per establir una connexió telefònica i a partir d’aquest moment, 5 cèntims per minut tarificant per segons. 

const inputInt = (text) => {
    const res = prompt(text)
    if (!res || isNaN(parseInt(res))) return 0

    return parseInt(res)
}

const userMin = inputInt("Minuts: ")
const userSeg = inputInt("Segons: ") + userMin*60

const tarifa = 5/60

const rawPrice = tarifa * userSeg /100
const priceWthIVA = rawPrice * .21 + rawPrice

alert(`Preu sense IVA ${rawPrice.toFixed(2)} €`)
alert(`Preu amb IVA ${priceWthIVA.toFixed(2)} €`)



//5. Fes un programa que demani a l’usuari un número de 5 dígits,
//comprovi que s’ha afegit correctament els 5 dígits i informi si aquest número comença i acaba amb el mateix valor.

var num = prompt("Introdueix un número de 5 dígits:");

if (num.length === 5 && !isNaN(num)) {

    if (num[0] === num[num.length - 1]) {
        alert("El número comença i acaba amb el mateix dígit.");
    } else {
        alert("El número no comença i acaba amb el mateix dígit.");
    }

} else {
    alert("Has d'introduir un número mínim de 5 dígits.");
}



//6. Fes un programa que demani a l’usuari una paraula i determini si acaba amb un número o amb una lletra.

let entrada6 = prompt("Introduce una paraula");
let ultimoCaracter = entrada6[entrada6.length - 1];
console.log(Number.isInteger(Number(ultimoCaracter)) ? 'El ultimo caracter es un numero.':'El ultimo caracter es una letra.');  



//7. Fes un programa que demani a l’usuari una paraula i posi la primerar lletra en majúscula i la resta en minúscules.

let entrada7 = prompt("Introdueix una palabra");
console.log(entrada7.slice(0,1).toUpperCase() + entrada7.slice(1, entrada7.length)); 



//8. Fes un programa que demani a l’usuari una paraula i determini si conté “@” i “c”.

let num = prompt("Introdueix una paraula")
if(num.includes('@') && num.includes('c')){
    console.log("La paraula té @ i c")



//9. Fes un programa que demani a l’usuari el nom d’un arxiu (Ex: treball.doc), comprovi que té un format i retorni la seva extensió.

let nom = prompt("Nom de l'arxiiu: ")
let extensio = nom.slice(nom.indexOf('.')-1)
console.log(extensio)



//10. Fes un programa que demani a l’usuari un text i determini si dins aquest text existeix la paraula (“javascript”). Si existeix, l’ha de reemplaçar per “JS m’agrada!!.

let txt= prompt("Introdueix un text")
if(txt.includes('javascript')){
    console.log(txt.replace("javascript", "JS m'agrada!!"));
}else{
    console.log("El teu text no conté la paraula javascript.");
}



//11. Fes un programa que demani a l’usuari un text i reemplaci tots els caràcters “ “ per una coma.

let txt = prompt("Introdueix una paraula")
let result = txt.replace(" ",",")
console.log(result)



//12. Fes un programa on s’hagi d'introduir el següent text:  “    JS m’agrada !!!       “ i mostri el text sense espais en blanc ni a l’inici ni al final.

let paraula = prompt("Introdueix una paraula")
let resultado = paraula.replace(" ","")
console.log(resultado)

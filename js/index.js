//DECLARACIÓ DE VARIABLES
const MAX_JUGADES = 20;
let numJugades = MAX_JUGADES;
let numSecret =  Math.floor(Math.random() * 20) + 1;
console.log(numSecret);
let puntsAnteriors = 0;


//Variables indentificatius DOM

let tracker = document.getElementById("track"); //estat partida
let inputNum = document.getElementById("num"); //casella del número
let njugades = document.getElementById("njugades"); // total jugades
let icona = document.getElementById("icona");
let reiniciar =  document.getElementById("reiniciar");
let punts = document.getElementById("punts");


//FUNCIONS 

function hasGuanyat(){
    
    tracker.textContent = 'El número es correcte';
    document.body.style.backgroundColor = 'green';
    inputNum.style.backgroundColor = 'green';
    icona.textContent = numSecret; //mostra el número en el front
    activarButtonReiniciar();
    
    millorPartida(); 
    
}

function finalPartida(){
    tracker.textContent = 'Final de la partida';
    document.body.style.backgroundColor = 'red';
    inputNum.style.backgroundColor = 'red';
    icona.textContent = numSecret; //mostra el número en el front
    activarButtonReiniciar();
}


function desactivarButtonReiniciar(){
    reiniciar.disabled = true;
}

function activarButtonReiniciar(){
    reiniciar.disabled = false;
}

function millorPartida(){
    if (puntsAnteriors < numJugades){
    puntsAnteriors = numJugades;
    punts.textContent = puntsAnteriors;

    }
}



//Botó REINICIA 
function restart(){
    
    //part visual
    tracker.textContent = 'Comencem la partida...';
    icona.textContent = '?'; 
    document.body.style.backgroundColor = 'black';
    inputNum.style.backgroundColor = 'black';
    njugades.textContent = MAX_JUGADES; //jugades

    //part back-end
    numSecret =  Math.floor(Math.random() * 20) + 1; 
    numJugades = MAX_JUGADES; 
    console.log(numSecret);

    
    //posar-ho en blanc
    console.log('reiniciar partida');
    num.value= "";

    //desactivar botó
    desactivarButtonReiniciar();


}



//BOTÓ PROVA
function jugada(){

    console.log('intentant jugada amb número...');
    let num = inputNum.value;
    let currentNum  = parseInt(num);
    //console.log(currentNum, typeof currentNum);


    if(currentNum){
        
        if (numSecret == currentNum){
            hasGuanyat();
            

        } else {
            numJugades--;
            if (numJugades <= 0){ //evitar que en jugades salga negativo
                njugades.textContent = 0; //una vez llegada a 0 jugades, siempre pondrá 0
                finalPartida();
                
            }else if (currentNum > numSecret){
                tracker.textContent = 'El número és massa gran..';
                njugades.textContent = numJugades;
            }else if (currentNum < numSecret){
                tracker.textContent = 'El número és massa petit..';
                njugades.textContent = numJugades;
            }
        }
        
    }else{
        console.log('no té valor')
        alert('El número introduit no és correcte')
    }
}


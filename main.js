

// chiedere l'età al passeggiero

const ageUser = parseInt(prompt('quanti anni hai?'))
console.log('Anni passeggiero: ' + ageUser);


// Quanti km vuole percorrere?

const kmUser = parseInt(prompt('quanti Km vuoi percorrere?'))
console.log('Km che vuole percorrere: ' + kmUser);


// moltiplicare il numero di km per 0.21 € per ottenere il prezzo totale

const totalPrice = kmUser * 0.21 
console.log('totale prezzo bigletto: ' + totalPrice);

// se il passeggero ha età minore a 18 anni allora verrà applicato uno sconto del 20% sul prezzo totale

const underAgedisconut = totalPrice * 0.2
console.log('sconto under 18 ' + underAgedisconut);

// se il passeggero ha età maggiore a 65 anni allora verrà applicato uno sconto del 40% sul prezzo totale

const overAgedisconut = totalPrice * 0.4
console.log('sconto under 65 ' + overAgedisconut);


let finalPrice;

if (ageUser < 18 ){
     finalPrice = totalPrice - underAgedisconut
} else if (ageUser > 65) {
     finalPrice = totalPrice - overAgedisconut
} else {
     finalPrice = totalPrice
    
}

// comunica all'utente la cifra

 document.getElementById ("prezzo").innerHTML = finalPrice.toFixed(2);

let nombre = prompt("\n¡Bienvenido! \nIngresa tu nombre")
console.log (nombre)


let intro = alert("\n¿Que tanto sabes de autos?  \n \n¡Vamos averiguarlo!")

    let pregunta1 = prompt("¿Cual es el auto preferido de los japoneses? \n1. Nissan Skyline GTR \n2. Toyota Corolla \n3. Renault Clio Mio")
        if (pregunta1 == 1){
            alert ("Felicitaciones tu respuesta es correcta");
        } else 
            {alert ("Lo siento tu respuesta es incorrecta")
        }

    let pregunta2 = prompt("¿Como se llama el japones mas reconocido en el mundo del tunners? \n1. Jakie Chan \n2. ChamchumChim \n3. Akira Nakai")
        if (pregunta2 == 3){
            alert ("Felicitaciones tu respuesta es correcta");
        } else 
            {alert ("Lo siento tu respuesta es incorrecta")
        }

    let pregunta3 = prompt("¿Cuantos cilindros tiene el motor del Toyota Supra mk4? \n 5 \n 6 \n 20")
        if (pregunta3 == 6){
            alert ("Felicitaciones tu respuesta es correcta");
        } else 
            {alert ("Lo siento tu respuesta es incorrecta");
        }
    

function calcular (numero1, numero2, operacionMatematica) {
switch (operacionMatematica) {
    case "+":
        return numero1 + numero2;
    case "-":
        return numero1 - numero2;
    case "*":
        return numero1 * numero2;
    case "/":
        if (numero2 === 0) {
            return "No es posible ejecutar esta operacion"
        }else{
            return (numero1 / numero2);
        }
        default:
            return"Opcion invalida"
}
}

let saludo= alert("Ten todo calculado antes de comprar. \nUsa nuestra calculadora")
let val1 = parseInt(prompt("Ingresa el primer numero"));
let operacion = prompt("Selecciona una operacion: \n+ \n- \n* \n/ ")
let val2 = parseInt(prompt("Ingresa el segundo numero"));

let resultado = calcular(val1, val2, operacion);
alert(val1 + " " + operacion + " " +val2 + "=" + resultado);
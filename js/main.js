
//Inicio del simulador//
//Preguntas y respuestas inicia//
// let nombre = prompt("\n👋¡Bienvenido!😀  \n Ingresa tu nombre👇")
// console.log (nombre)


// let intro = alert("\n🔍¿Que tanto sabes de autos?🔎  \nSelecciona los numeros con las respuestas correctas ✔ \n¡Vamos averiguarlo!📝")

//     let pregunta1 = prompt("¿Cual es el auto preferido de los japoneses?🕵️‍♀️ \n1. Nissan Skyline GTR \n2. Toyota Corolla \n3. Renault Clio Mio")
//         if (pregunta1 == 1){
//             alert ("🎉 ¡Felicitaciones tu respuesta es correcta! 👏");
//         } else 
//         {alert ("😢 Lo siento tu respuesta es incorrecta. \nEstuviste asi de cerca 🤏")
//         }

//     let pregunta2 = prompt("🌍¿Como se llama el japones mas reconocido en el mundo del tunners?🧐 \n1. Jakie Chan \n2. ChamchumChim \n3. Akira Nakai")
//         if (pregunta2 == 3){
//             alert ("😲 ¡Felicitaciones tu respuesta es correcta! 👌");
//         } else 
//             {alert ("❌ Lo siento tu respuesta es incorrecta 🥺")
//         }

//     let pregunta3 = prompt("🚗 ¿Cuantos cilindros tiene el motor del Toyota Supra mk4? ⚙ \n 5 \n 6 \n 20")
//         if (pregunta3 == 6){
//             alert ("🙌 Felicitaciones tu respuesta es correcta 🏆");
//         } else 
//             {alert ("👉 Lo siento tu respuesta es incorrecta 👎 \nGracias por intentarlo 🙋‍♂️");
//         }


// //Simulador de facturacion inicia//

let totalCompra = [];

let agregaProductoSeleccionado;
let costoProductoSeleccionado;

//Ciclo de registro de productos y costos//
do {
    agregaProductoSeleccionado = prompt("Para hacer la factura al cliente ingrese el Producto.⚙  \nPara salir, escribe \n\"Salir\" 👈");

    if (agregaProductoSeleccionado.toLowerCase() !== "salir") {

        do {
            costoProductoSeleccionado = parseInt(prompt("Ingresar el costo del producto.💵"));
        } while (isNaN(costoProductoSeleccionado) || costoProductoSeleccionado === "")

        let productoSeleccionado = {
            agrega: agregaProductoSeleccionado,
            costo: costoProductoSeleccionado
        }
        totalCompra.push(productoSeleccionado);
    }

} while (agregaProductoSeleccionado.toLowerCase() !== "salir");

console.log(totalCompra)

//Funcion que suma el total de los productos//
function sumaTotaldeCompra() {
    let total = totalCompra.reduce((acumulador, compra) => acumulador + compra.costo, 0);
    return total;
}

console.log("Ticket de compra con el Total de costos", sumaTotaldeCompra());

//Simulador de Facturacion Fin //

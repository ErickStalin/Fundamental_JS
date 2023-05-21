'use strict';
//Variable
var codigo = "A23F45T"; 
let numeroTelefono = "0981351236";
const contador = 2;
console.log("Variables\n"+"VAR: "+codigo+"\nLET: "+numeroTelefono+"\nCONST: "+contador)
console.log("")
//Ficha medica (uso de string).
const tipoSangre = "O+"
const numIdentificacion = "0981351236"
const direccion ="Colinas del Norte"
var nombre = "Erick"
console.log("Datos del paciente: \n"+"Nombre: "+nombre+"\n"+"Direccion: "+direccion+"\n"+"Numero de identificacion: "+numIdentificacion+"\n"+"Tipo de sangre: "+tipoSangre.toUpperCase())

//Calculo del IMC (uso de numeros)
let peso = 60, altura = 1.70;
let respuesta = peso/(altura*altura);
console.log("\nCalculo del IMC \nEl IMC es: "+Math.round(respuesta))

//Uso de booleanos
let nota1 = 7
let nota2 = 7.5
let nota3 = (nota1 + nota2)/2
let estado =  nota3 > 7 ? "APROBADO" : "REPROBADO"
console.log("\nCalculo de nota \n"+estado);

//Uso de condicionales
const nota = 8
console.log("\nNOTAS DEL ESTUDIANTE")
if (nota < 7 && nota > 4)
{
    console.log("Estado del estudiante: SUPLETORIO");
}
else if (nota < 4)
{
    console.log("Estado del estudiante: REPROBADO");
}
else{
    console.log("Estado del estudiante: APROBADO");
}

//Uso de los bucles
const usuario ={
    Nombre:"Erick",
    edad: "21",
    Clave: "1234"
}
console.log("\nInformacion de cliente")
for (const [clave,valor] of Object.entries(usuario)) {
    console.log(`${clave} - ${valor}`)
}

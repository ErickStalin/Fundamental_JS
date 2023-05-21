//Funcioines
console.log("FUNCIONES\n")
console.log("Tipos de funciones")
function FunDeclarada(){
    console.log("Transaccion exitosa");
}
FunDeclarada()

const FunExpresada = function(){
    console.log("Transaccion denegada");
}
FunExpresada()


//Funcion anonima y autoejecutada
console.log("\nFuncion anonima y autoejecutada")
let show = function() {
    console.log('Usuario registrado');
};
show();

//Funcion autoejecutada
(function () {
    var nombreFun = "Barry";
    console.log("Hola "+nombreFun+" bienvenido al sistema")
})();

//Funcion con parametros
console.log("\nDatos del paciente:")
function informacionCita (nombre,turno,doctor,...args){
    let respuesta = 0;
    if(args.length>0) args.forEach(e =>respuesta+=e)
    return "Nombre:" + nombre+"\nTurno: "+ turno+"\nDoctor: "+doctor+"\nTotal a pagar:"+ respuesta
}
console.log(informacionCita("Kevin","112","Erick",20,30,40))

//Retorno de una funcion
function misDatos( nombre, apellido, edad, altura, peso){
    return "Nombre: "+nombre + " " +apellido + "\nEdad:"+ edad + "\nIMC:" + (peso)/(altura*altura)
}
console.log("\nMis datos:\n"+misDatos("Erick","Santillan",21 ,1.70,67))

//Funcion flecha 
console.log("\nGenerar contraceña (uso de la funcion flecha)")
const generarKey = (identificacion)=>{
    if(identificacion == "1R34T5"){
        console.log("Su key es: Q6P9UI")
    }
    else{
        console.log("Numero de identificacion invalido!")
    }
}
generarKey("1R34T5")

//This 
console.log("\nGenerar correo (Uso del this)")
const registro = {
    nombre: "Erick",
    correo: "erick.santillan@epn.edu.ec",
    datos: function () {
        console.log("Bienvenido "+this.nombre," tu correo es el siguiente: "+this.correo)
}
}
registro.datos()
'use strict';
let numeroDientes = 4;
const doctor = {
    nombre: "Carlos",
    horariosTrabajo: ['9:00','11:00','16:00'],
    especialida: "Odontologo",
    identificacion: "2132435465",
    recivo (numeroDientes){
        return numeroDientes*4;
    },
    edad: "30"
}
//Eliminamos un elemento del objeto
delete doctor.edad

//Destruccion de objetos
const supermercado ={
    nombre: "Supermaxi",
    sucursales: ['Quicentro Shopping','San Carlos','Urdesa','San Gabriel'],
    horarioAtencion: "9:00",
    trabajador:{
        NombreT: "Rolando",
        trabajo: "Cajero",
        edad:21
    }
}

const {nombre,sucursales,horarioAtencion,miCargo=supermercado.trabajador} = supermercado
console.log(nombre,sucursales[0],horarioAtencion,miCargo);

//Congelar objetos
Object.freeze(supermercado)
console.log("")
console.log("El objeto esta congelado: "+Object.isFrozen(supermercado));

//Uso del seal
Object.seal(doctor)
console.log("El objeto es seal: "+Object.isSealed(doctor))
doctor.especialida= "Oftamologo"
console.log("Datos modificados")
console.log(doctor)

//Copar objetos
const dato1={
    Nombre: "Erick",
    edad: 21
}
const dato2={
    apellido: "Santillan",
    DNI: "0921351236"
}

const informacion = {...dato1,...dato2}
console.log("\nUnion de los objetos")
console.log(informacion)

//Uso del this 
const lista ={
    nombreL: "azul",
    tipo: ["primario","secundario","terciario"],
    infoColor (){
        return `Informacion del color: ${this.tipo[0]}`
    }
}

console.log(lista.infoColor)
 
//Metodos para trabajar con objetos
console.log("Obtener las claves:",Object.keys(doctor))
console.log("Obtener los valores:",Object.values(doctor))
console.log("Obtener las claves y valores en un array:",Object.entries(doctor))

'use strict';
const datosVehiculo= ["Erick","Toyota",2015,true,{ciudad:"Cuenca"}]
console.log("FOR\n")
for (let i=0 ; i<datosVehiculo.length ; i++){
    console.log(datosVehiculo[i]);
}

console.log("FOR EACH\n")
datosVehiculo.forEach((e,i)=>console.log(`${i} - ${e}`))

console.log("MAP\n")
const newFriends= datosVehiculo.map((e)=> `H ${e}`)
console.log(datosVehiculo);

//METODOS
//PUSH Y UNSHIFT
const matriculacion=["2004","2018"]
const colores = ["azul","negro","verde"]
datosVehiculo.push(matriculacion)
datosVehiculo.unshift(colores)
console.log("PUSH Y UNSHIFT\n")
console.log(datosVehiculo);

//POP Y SHIFT
datosVehiculo.pop(datosVehiculo)
datosVehiculo.shift(datosVehiculo)
console.log("POP Y SHIFT\n")
console.log(datosVehiculo);

//FindIndex
console.log("FINDINDEX\n")
const buscar = datosVehiculo.findIndex((f)=>f ==="Erick")
if(buscar == 0){
    console.log("Dato encontrado")
}
else{
    console.log("Dato no encontrado")
}
console.log("Resultado del findIndex: "+buscar)

//Filter
console.log("FILTER\n")
const filtro1 = datosVehiculo.filter((e)=> e != 'Erick')
console.log(filtro1)

//Concat
console.log("CONCAT\n Informacion completa:")
const dato1 = ["Erick", "Stalin"]
const dato2 = ["Santillan", "Estrada"]
const datosCompletos = dato1.concat(dato2)
console.log(datosCompletos)

//Includes
console.log("\nINCLUDES")
console.log(datosCompletos.includes("Erick"))
console.log(datosCompletos.includes(120))

//Some
console.log("\nSOME")
const consulta = datosCompletos.some(u=>u==="Stalin")
console.log("Existe la palabra buscada: "+consulta)

//Every
console.log("\nEVERY")
const canasta = [
    {   nombre: "manzana",
        cantidad: 2,
        precio: 0.41
    },
    {   nombre: "banana",
        cantidad: 10,
        precio: 0.10,
    },
    {
        nombre: "coco",
        cantidad: 3,
        precio: 2,
    }
]
const resultadoEvery = canasta.every(e=>e.precio >= 0.40)
console.log("Los productos son mayor a 0.40 ctvs: "+resultadoEvery);

//Sort
console.log("\nSORT")
console.log(canasta.sort())

//Reduce
console.log("\nREDUCE")
const petShop = [
    { animal: "Perros", cantidad: 15 },
    { animal: "Gatos", cantidad: 30},
    { animal: "Aves", cantidad: 50}
];
const resultado = petShop.reduce((pre, act) => pre + act.cantidad, 0);
console.log("Total de animales: ",resultado);

//Acceso a los datos del arreglo
console.log("\nAcceso a datos")
console.log("Elemento de la posicion [1]: "+datosCompletos[1])

//Sintaxis REST
console.log("\nREST")
const [uno, dos, ...rest] = ['1', '2', '3', '4', '5', '6', '7']
console.log(rest)
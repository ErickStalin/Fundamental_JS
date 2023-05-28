//Asynchronism
//codigo asincrono
"use strict";
function solicitar(tipo) {

    for (let index = 0; index < 10000000000; index++) 
    {
    }
    return `¡El ${tipo} es una moneda invalida!`
}
console.log("Ingrese una moneda")
console.log("Moneda ingresada")
const name = 'centavo'
const respuestaMaquina = solicitar("Centavo")
console.log(respuestaMaquina)

//codigo sincrono
"use strict";
function solicitar2(tipo) {
    console.log(`¡El ${tipo} es una moneda invalida!!`)
}
console.log("Ingrese una moneda")
console.log("Moneda ingresada")
const name2 = 'centavo'
const data2 = setTimeout(()=>solicitar("Centavo"),5000)
console.log("Ingrese una momeda")

//promesas
const miPromesa = (datos) => {
    return new Promise((resolve, reject) => {
        let condicion;
        condicion = 1
        if(condicion == 1){
            resolve("Su curriculum fue aceptado")
        }
        else{
            reject("Su curriculum fue denegado")
        }
    })
    miPromesa.then((message => {
        console.log(message)
    })).catch((message) =>{
        console.log(message)
    })
} 
miPromesa(true)
    .then(respuesta => console.log(respuesta))
    .catch(error=>console.log(error))

//Funcion ASYNC
async function conexion(){
    try {
        console.log(await miPromesa(true))
    } catch (error) {
        console.log(error)
    }
}

const api = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

async function seleccion(){
    try {
        const peticion = await api
        const respuesta = await peticion.json()
        console.log("Palabra selecionada: "+respuesta[2].name)
    } catch (error) {
        console.log(error)
    }
}

conexion()
seleccion()
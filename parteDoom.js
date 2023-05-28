'use strict';
//Manipulacion del DOM
//Seleccion de delemento
const titulo = document.getElementById("tituloPrincipal");

//Permite seleccionar elementos por ID
const title = document.querySelector("titulo")
console.log(title)

//Selecciona todos los elementos que correspondan a la etiqueta
const title2 = document.querySelectorAll("titulo")
console.log(title2)

//Modificar el contenido
document.querySelector('.titulo').textContent="Lenguaje Compilado"

//Modificar el estilo
const buscar = document.querySelector('.p1')
buscar.style.border="10px green solid"

//Agregar elementos
const button = document.createElement("button")
button.innerText="Mas informacion sobre C++"
buscar.appendChild(button);
const parrafos = document.getElementsByClassName("parrafo");
console.log(parrafos.length);

//mouseout
const paso = document.querySelector('.titulo')

paso.addEventListener('mouseenter',function () {
    const paso = document.querySelector('.titulo')
		paso.style.border="10px green solid"
})

paso.addEventListener('mouseout',function () {
    const paso = document.querySelector('.titulo')
		paso.style.border=""
})


//input
const buscador1 = document.querySelector('.p1')
buscador1.addEventListener('input',function (e) {
    if(e.target.value ==="")
			{
		    const buscador1 = document.querySelector('.p1')
				buscador1.style.border="10px red solid"
			}
		else 
			{
		    const buscador1 = document.querySelector('.p1')
				buscador1.style.border=""
				console.log(e.target.value)
			}
})

//submit
const envio = document.querySelector('.p1')
envio.addEventListener('submit',(e)=> {
	e.preventDefault()
	console.log("enviando el formulario")
})

//key event
const buscador3 = document.querySelector('#Subtitulo')
buscador3 .addEventListener('keypress',(e)=> {
  if (event.key === "6") {
			e.preventDefault()
			console.log("enviando el formulario")
	}
})
'use strict';
import {verificar} from "./validarModulos.js";

document.getElementById('registro').addEventListener('click', identificar);

function identificar() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
  
    const resultado = verificar(edad)
  
    if (resultado) {
        console.log('Usuario favorable.');
    } else {
        console.log('Usuario no admitido');
    }
}

//Uso de express para levantar el servidor
const express = require('express');
const app = express();
const path = require('path')
const datos = [
  {
    id: 1,
    nombre: "Carlos",
    email: "carlos123@gmail.com",
    respuesta: "si"
  }
];
//Obtener los datos de consulta
const morgan = require("morgan");
//Lectura de datos de formulario
app.use(express.json())

app.use(morgan("dev"));
//Capturar datos del formulario
function captura() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var respuesta = document.getElementById("respuesta").value;
  console.log(nombre, email, respuesta);
}
//Uso de un middlewares
app.use('/user',(req,res,next)=>{
  console.log(`Datos: ${req.body}`);
  next()
})
//Metodo get para mandar un msj al servidor
app.get("/", (req, res) => {
  res.send("Paguina Principal!");
});
//envio de nuevos datos
app.post("/user", (req, res) => {
  datos.push({...req.body, id: datos.length+1 });
  res.send("Usuario creado");
});
//Mostrar datos
app.get("/user", (req, res) => {
  res.send(datos);
});
//Si la paguina no es encontrada
app.use((req, res) => {
  res.status(404).send("PAGINA NO ENCONTRADA!");
});

app.listen(3000);
console.log("ok");

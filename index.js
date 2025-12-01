const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) =>{
  //La req es la peticion y la res la respuesta
  res.send('Hola mundo desde la ruta raiz');
});

app.listen(port, ()=>{
  console.log(`Puerto escuchando en el ${port}`);
});


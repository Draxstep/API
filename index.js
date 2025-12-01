const express = require('express');
const apiRouter = require('./server');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) =>{
  res.send('Hola mundo desde la ruta raiz');
});

apiRouter(app);

app.listen(port, ()=>{
  console.log(`Puerto escuchando en el ${port}`);
});


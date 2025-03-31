const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8081;

const area = require('./controllers/areaController.js');
const volume = require('./controllers/volumeController.js') 
const perimetro = require('./controllers/perimetroController.js')

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => res.send('Estou aqui'));
app.use('/area', area);
app.use('/volume', volume);
app.use('/perimetro', perimetro);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`)); // Corrigido o console.log

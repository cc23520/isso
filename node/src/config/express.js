const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const rotas = require('../app/ROTAS/rotas');
rotas(app);

app.use(
    bodyParser.urlencoded({  
        extended:true,
    })
);

app.use(bodyParser.json());















module.exports = app; 
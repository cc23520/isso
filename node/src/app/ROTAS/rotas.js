// rotas.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });

const CartController = require('../BD/CartDAO');
const cartController = new CartController();

module.exports = (app, pool) => {
    // Middleware para configurar o cabeçalho CORS
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        next();
    });

   
    app.post('/adicionarItem', (req, res) => {
        
        if (!req.body) {
            return res.status(400).json({
                error: 'Dados ausentes'
            });
        }
        const nome = req.body.nome;
           
        
        
        

        
        const preco = parseFloat(req.body.preco);
        const quantidade = parseInt(req.body.quantidade);

        if (isNaN(preco) || isNaN(quantidade)) {
            return res.status(400).json({
                error: 'Valores de preço ou quantidade inválidos'
            });
        }

       
        cartController.adicionarItem(nome, req.body.descricao, preco, quantidade);

        
        res.status(200).json({
            message: 'Item adicionado com sucesso'
        });
    });

  
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../../views'));

    app.use('/arquivos/home', express.static(path.join(__dirname, '../../../arquivos/home')));
    app.use('/arquivos/login', express.static(path.join(__dirname, '../../../arquivos/login')));
    app.use('/arquivos/compras', express.static(path.join(__dirname, '../../../arquivos/compras')));

    app.get('/', (req, res) => {
        console.log("Acabou de usar a rota /home");
        res.render("../../views/home");
    });

    app.get('/login', (req, res) => {
        console.log("Acabou de usar a rota /login");
        res.render("../../views/login");
    });

    app.get('/compras', (req, res) => {
        console.log("Acabou de usar a rota /compras");
        res.render("../../views/compras");
    });
};
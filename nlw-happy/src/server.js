// Importar Depência/Library
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// Inicializar o Express
const server = express();
server
// Utilizar body do req
.use(express.urlencoded({ extended : true }))
// Utilizando arquivo estático
.use(express.static('public'))

// Configurar Template Engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')

// Criar as Rotas
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// Ligar o Server
server.listen(5500)


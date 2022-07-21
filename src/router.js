const express = require('express');

const ativosRouter = require('./controllers/ativos');

const contaRouter = require('./controllers/conta');

const routers = express.Router();

routers.use('/ativos', ativosRouter);

routers.use('/conta', contaRouter);

module.exports = routers;
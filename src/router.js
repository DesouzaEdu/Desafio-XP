const express = require('express');

const ativosRouter = require('./controllers/ativos');

const contaRouter = require('./controllers/conta');

const investimentosRouter = require('./controllers/investimentos');

const routers = express.Router();

routers.use('/ativos', ativosRouter);

routers.use('/conta', contaRouter);

routers.use('/investimentos', investimentosRouter);

module.exports = routers;
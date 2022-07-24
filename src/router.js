const express = require('express');

const ativosRouter = require('./controllers/ativos');

const contaRouter = require('./controllers/conta');

const investimentosRouter = require('./controllers/investimentos');

const loginRouter = require('./controllers/login');

const routers = express.Router();

routers.use('/ativos', ativosRouter);

routers.use('/conta', contaRouter);

routers.use('/investimentos', investimentosRouter);

routers.use('/login', loginRouter);

module.exports = routers;
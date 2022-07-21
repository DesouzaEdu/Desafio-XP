const express = require('express');

const ativosRouter = require('./controllers/ativos');

const routers = express.Router();

routers.use('/ativos', ativosRouter);

module.exports = routers;
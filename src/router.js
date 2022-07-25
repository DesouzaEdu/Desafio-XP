const express = require('express');

const ativosRouter = require('./controllers/ativos');

const contaRouter = require('./controllers/conta');

const investimentosRouter = require('./controllers/investimentos');

const loginRouter = require('./controllers/login');

const routers = express.Router();

/**
 * @swagger
 *  tags:
 *      name: Investimentos
 *      description: Endpoints relacionados a compra e venda de investimentos
 */
routers.use('/ativos', ativosRouter);
/**
 * @swagger
 *  components:
 *      schemas:
 *          Investimentos:
 *              type: object
 *              required:
 *                  -codCliente
 *                  -codAtivo
 *                  -qtdeAtivo
 *              properties:
 *                  codCliente:
 *                      type: integer
 *                  codAtivo:
 *                      type: integer
 *                  qtdeAtivo:
 *                      type: integer
 *              example:
 *                  codCliente: 2
 *                  codAtivo: 1
 *                  qtdeAtivo: 10
 */
routers.use('/conta', contaRouter);

routers.use('/investimentos', investimentosRouter);

routers.use('/login', loginRouter);

module.exports = routers;
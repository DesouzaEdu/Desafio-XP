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
/**
 * @swagger
 *  tags:
 *      name: Ativos
 *      description: Endpoints relacionados a ativos
 */
/**
 * @swagger
 *  /ativos/{id}:
 *      get:
 *          tags: [Ativos]
 *          description: Endpoint retorna as informações do ativo segundo o id, no caso representado pelo número 1.
 *          parameters:
 *              - in: path
 *                name: id
 *                type: string
 *                required: true
 *          responses:
 *              200:
 *                  content:
 *                      application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              codAtivo:
 *                                  type: integer
 *                              qtdeAtivo:
 *                                  type: integer
 *                              valor:
 *                                  type: decimal
 *                          example:
 *                              codCliente: 1
 *                              qtdeAtivo: 3100
 *                              valor: 100.51
 * 
 */
routers.use('/ativos', ativosRouter);

routers.use('/conta', contaRouter);

routers.use('/investimentos', investimentosRouter);

routers.use('/login', loginRouter);

module.exports = routers;
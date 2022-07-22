const express = require('express');

const { getAccountById, deposit, withdraw  } = require('../services/conta');

const validateValor = require('../middlewares/validateValor');

const contaRouter = express.Router();

contaRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const [ account ] = await getAccountById(id);
    res.status(200).json(account);
});

contaRouter.post('/deposito', validateValor, async (req, res) => {
    const {status} = await deposit(req.body);
    res.status(status).end();
});

contaRouter.post('/saque', validateValor, async (req, res) => {
    const {status} = await withdraw(req.body, res);
    res.status(status).end();
});

module.exports = contaRouter;
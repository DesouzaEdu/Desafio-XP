const express = require('express');

const { getAccountById, deposit, withdraw  } = require('../services/conta');

const validateValor = require('../middlewares/validateValor');
const validateCodCliente = require('../middlewares/validateCodCliente');

const contaRouter = express.Router();

contaRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const [ account ] = await getAccountById(id);
    res.status(200).json(account);
});

contaRouter.post('/deposito', validateCodCliente, validateValor, async (req, res) => {
    const {status} = await deposit(req.body);
    res.status(status).end();
});

contaRouter.post('/saque', validateCodCliente, validateValor, async (req, res) => {
    const resp = await withdraw(req.body);
    if (resp.message) {
        return res.status(resp.status).json({message: resp.message});
    }
    res.status(resp.status).end();
});

module.exports = contaRouter;
const express = require('express');

const { buyInvestment, sellInvestment  } = require('../services/investimentos');

const validateCodCliente = require('../middlewares/validateCodCliente');
const validateCodAtivo = require('../middlewares/validateCodAtivo');

const investimentosRouter = express.Router();

investimentosRouter.post('/comprar', validateCodCliente, validateCodAtivo, async (req, res) => {
    const resp = await buyInvestment(req.body);
    if (resp.message) {
        return res.status(resp.status).json({message: resp.message});
    }
    res.status(resp.status).end();
});

investimentosRouter.post('/vender',  validateCodCliente, validateCodAtivo, async (req, res) => {
    const resp = await sellInvestment(req.body);
    if (resp.message) {
        return res.status(resp.status).json({message: resp.message});
    }
    res.status(resp.status).end();
});

module.exports = investimentosRouter;
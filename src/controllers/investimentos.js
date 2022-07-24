const express = require('express');

const { buyInvestment, sellInvestment  } = require('../services/investimentos');

const validateCodCliente = require('../middlewares/validateCodCliente');
const validateCodAtivo = require('../middlewares/validateCodAtivo');
const { validateToken } = require('../middlewares/validateToken');

const investimentosRouter = express.Router();

investimentosRouter.post('/comprar', validateToken, validateCodCliente, validateCodAtivo, async (req, res) => {
    const resp = await buyInvestment(req.body);
    if (resp.message) {
        return res.status(resp.status).json({message: resp.message});
    }
    res.status(resp.status).json(resp.obj);
});

investimentosRouter.post('/vender', validateToken,  validateCodCliente, validateCodAtivo, async (req, res) => {
    const resp = await sellInvestment(req.body);
    if (resp.message) {
        return res.status(resp.status).json({message: resp.message});
    }
    res.status(resp.status).json(resp.obj);
});

module.exports = investimentosRouter;
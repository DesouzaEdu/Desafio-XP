const express = require('express');

const { buyInvestment, sellInvestment  } = require('../services/investimentos');

const investimentosRouter = express.Router();

investimentosRouter.post('/comprar', async (req, res) => {
    const resp = await buyInvestment(req.body);
    if (resp.message) {
        return res.status(resp.status).json({message: resp.message});
    }
    res.status(newBuy.status).end();
});

investimentosRouter.post('/vender', async (req, res) => {
    const resp = await sellInvestment(req.body);
    if (resp.message) {
        return res.status(resp.status).json({message: resp.message});
    }
    res.status(newSell.status).end();
});

module.exports = investimentosRouter;
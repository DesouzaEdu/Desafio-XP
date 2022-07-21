const express = require('express');

const { buyInvestment, sellInvestment  } = require('../services/investimentos');

const investimentosRouter = express.Router();

investimentosRouter.post('/comprar', async (req, res) => {
    const newBuy = await buyInvestment(req.body, res);
    res.status(newBuy.status).end();
});

investimentosRouter.post('/vender', async (req, res) => {
    const newSell = await sellInvestment(req.body, res);
    res.status(newSell.status).end();
});

module.exports = investimentosRouter;
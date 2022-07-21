const express = require('express');

const { buyInvestment  } = require('../services/investimentos');

const investimentosRouter = express.Router();

investimentosRouter.post('/comprar', async (req, res) => {
    const newInvestment = await buyInvestment(req.body, res);
    res.status(newInvestment).ends();
});

module.exports = investimentosRouter;
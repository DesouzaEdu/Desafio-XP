const express = require('express');

const { buyInvestment  } = require('../services/investimentos');

const investimentosRouter = express.Router();

investimentosRouter.post('/comprar', async (req, res) => {
    const a = await buyInvestment(req.body, res);
    res.status(200).json(a);
});

module.exports = investimentosRouter;
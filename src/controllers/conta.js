const express = require('express');

const { getAccountById  } = require('../services/conta');

const contaRouter = express.Router();

contaRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const [ account ] = await getAccountById(id);
    res.status(200).json(account);
});

module.exports = contaRouter;
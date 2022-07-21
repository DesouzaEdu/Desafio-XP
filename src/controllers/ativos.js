const express = require('express');

const { getClientsById  } = require('../services/products');

const ativosRouter = express.Router();

ativosRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const clients = await getClientsById(id);
    res.status(200).json(clients);
});

module.exports = ativosRouter;
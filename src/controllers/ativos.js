const express = require('express');

const { getClientsById, getAssetsById  } = require('../services/ativos');

const ativosRouter = express.Router();

ativosRouter.get('/cliente/:id', async (req, res) => {
    const { id } = req.params;
    const clients = await getClientsById(id);
    res.status(200).json(clients);
});

ativosRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const [assets] = await getAssetsById(id);
    res.status(200).json(assets);
});

module.exports = ativosRouter;
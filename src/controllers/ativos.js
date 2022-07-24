const express = require('express');
const { validateToken } = require('../middlewares/validateToken');

const { getClientsById, getAssetsById  } = require('../services/ativos');

const ativosRouter = express.Router();

ativosRouter.get('/cliente/:id', validateToken, async (req, res) => {
    const { id } = req.params;
    const clients = await getClientsById(id);
    res.status(200).json(clients);
});

ativosRouter.get('/:id', validateToken, async (req, res) => {
    const { id } = req.params;
    const [assets] = await getAssetsById(id);
    res.status(200).json(assets);
});

module.exports = ativosRouter;
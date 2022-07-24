const ativos = require('../models/ativos');

const getClientsById = async (id) => {
    const arrClients = await ativos.getClients(id);

    return arrClients.map((item) => ({
        CodCliente: item.cliente_id,
        CodAtivo: item.ativo_id,
        QtdeAtivo: item.quantidade,
        Valor: parseFloat(item.valor),
    }));
};

const getAssetsById = async (id) => {
    const arrAssets = await ativos.getAssets(id);

    return arrAssets.map((item) => ({
        CodAtivo: item.id,
        QtdeAtivo: item.quantidade_disponivel,
        Valor: parseFloat(item.valor),
    }));
};

module.exports = { getClientsById, getAssetsById };
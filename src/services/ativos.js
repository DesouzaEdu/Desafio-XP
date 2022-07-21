const ativos = require('../models/ativos');

const getClientsById = async (id) => {
    const arrClients = await ativos.getClients(id);

    return arrClients.map((item) => ({
        CodCliente: item.cliente_id,
        CodAtivo: item.ativo_id,
        QtdeAtivo: item.quantidade,
        Valor: item.valor,
    }));
};

module.exports = { getClientsById };
const connection = require('./connection');

const getClients = async (id) => {
    const [result] = await 
    connection.execute(`
    SELECT cliente_id, ativo_id, quantidade, valor 
    FROM DbInvest.carteira as C
    INNER JOIN DbInvest.ativos as A
    ON C.ativo_id = A.id
    where cliente_id = ?;`, [id]);
    return result;
};

const getAssets = async (id) => {
    const [result] = await 
    connection.execute(`
    SELECT * 
    FROM DbInvest.ativos
    where id = ?;`, [id]);
    return result;
};


module.exports = { getClients, getAssets };
const connection = require('./connection');

const getClients = async (id) => {
    const [result] = await 
    connection.execute(`
    SELECT cliente_id, ativo_id, quantidade, valor 
    FROM heroku_78de3bb0c0dac82.carteira as C
    INNER JOIN heroku_78de3bb0c0dac82.ativos as A
    ON C.ativo_id = A.id
    where cliente_id = ?;`, [id]);
    return result;
};

const getAssets = async (id) => {
    const [result] = await 
    connection.execute(`
    SELECT * 
    FROM heroku_78de3bb0c0dac82.ativos
    where id = ?;`, [id]);
    return result;
};


module.exports = { getClients, getAssets };
const connection = require('./connection');

const getAccount = async (id) => {
    const [result] = await 
    connection.execute(`
    SELECT id, saldo FROM DbInvest.cliente
    WHERE id = ?;`, [id]);
    return result;
};

module.exports = { getAccount };
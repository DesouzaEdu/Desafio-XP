const connection = require('./connection');

const getAccount = async (id) => {
    const [result] = await 
    connection.execute(`
    SELECT id, saldo FROM DbInvest.cliente
    WHERE id = ?;`, [id]);
    return result;
};

const updateBalance = async (saldo, id) => {
    const [result] = await 
    connection.execute(`UPDATE DbInvest.cliente
    SET saldo = ?
    WHERE id = ? 
    ;`, [saldo, id]);
    return result;
};

module.exports = { getAccount, updateBalance };
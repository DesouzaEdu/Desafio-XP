const connection = require('./connection');

const getAccount = async (id) => {
    const [result] = await 
    connection.execute(`
    SELECT id, saldo FROM heroku_78de3bb0c0dac82.cliente
    WHERE id = ?;`, [id]);
    return result;
};

const updateBalance = async (saldo, id) => {
    const [result] = await 
    connection.execute(`UPDATE heroku_78de3bb0c0dac82.cliente
    SET saldo = ?
    WHERE id = ? 
    ;`, [saldo, id]);
    return result;
};

module.exports = { getAccount, updateBalance };
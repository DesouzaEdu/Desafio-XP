const connection = require('./connection');

const getUser = async (user, password) => {
    const [result] = await 
    connection.execute(`
    SELECT * FROM DbInvest.cliente
    WHERE usuario = ? AND senha = ?;`, [user, password]);
    return result;
};

module.exports = { getUser };
const connection = require('./connection');

const getUser = async (user, password) => {
    const [result] = await 
    connection.execute(`
    SELECT * FROM heroku_78de3bb0c0dac82.cliente
    WHERE usuario = ? AND senha = ?;`, [user, password]);
    return result;
};

module.exports = { getUser };
const connection = require('./connection');

const getInvestedAsset = async (id) => {
    const [result] = await 
    connection.execute(`
    SELECT * FROM heroku_78de3bb0c0dac82.ativos
    WHERE id = ?;`, [id]);
    return result;
};

const hasThisAsset = async (clientId, assetId) => {
    const [result] = await 
    connection.execute(`
    SELECT * FROM heroku_78de3bb0c0dac82.carteira
    WHERE cliente_id = ? AND ativo_id = ?;`, [clientId, assetId]);
    return result;
};

const updateWallet = async (quantity, clientId, assetId) => {
    const [result] = await 
    connection.execute(`UPDATE heroku_78de3bb0c0dac82.carteira
    SET quantidade = ?
    WHERE cliente_id = ? AND ativo_id = ?
    ;`, [quantity, clientId, assetId]);
    return result;
};

const updateAsset = async (quantity, assetId) => {
    const [result] = await 
    connection.execute(`UPDATE heroku_78de3bb0c0dac82.ativos
    SET quantidade_disponivel = ?
    WHERE id = ?
    ;`, [quantity, assetId]);
    return result;
};

const addWallet = async (quantity, clientId, assetId) => {
    const [result] = await 
    connection.execute(`INSERT INTO heroku_78de3bb0c0dac82.carteira (cliente_id, ativo_id, quantidade) VALUES
    (?, ?, ?);`, [clientId, assetId, quantity]);
    return result;
};

const deleteWallet = (clientId, assetId) => {
    connection.execute('DELETE FROM heroku_78de3bb0c0dac82.carteira WHERE cliente_id = ? AND ativo_id = ?;', [clientId, assetId]);
};  



module.exports = { getInvestedAsset, hasThisAsset, updateWallet, addWallet, deleteWallet, updateAsset };
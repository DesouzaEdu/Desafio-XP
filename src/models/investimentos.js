const connection = require('./connection');

const getInvestedAsset = async (id) => {
    const [result] = await 
    connection.execute(`
    SELECT * FROM DbInvest.ativos
    WHERE id = ?;`, [id]);
    return result;
};

const hasThisAsset = async (clientId, assetId) => {
    const [result] = await 
    connection.execute(`
    SELECT * FROM DbInvest.carteira
    WHERE cliente_id = ? AND ativo_id = ?;`, [clientId, assetId]);
    return result;
};

const updateWallet = async (quantity, clientId, assetId) => {
    const [result] = await 
    connection.execute(`UPDATE DbInvest.carteira
    SET quantidade = ?
    WHERE cliente_id = ? AND ativo_id = ?
    ;`, [quantity, clientId, assetId]);
    return result;
};

const addWallet = async (quantity, clientId, assetId) => {
    const [result] = await 
    connection.execute(`INSERT INTO DbInvest.carteira (cliente_id, ativo_id, quantidade) VALUES
    (?, ?, ?);`, [clientId, assetId, quantity]);
    return result;
};

const deleteWallet = (clientId, assetId) => {
    connection.execute('DELETE FROM DbInvest.carteira WHERE cliente_id = ? AND ativo_id = ?;', [clientId, assetId]);
};  



module.exports = { getInvestedAsset, hasThisAsset, updateWallet, addWallet, deleteWallet };
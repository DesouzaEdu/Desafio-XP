const conta = require('../models/conta');

const getAccountById = async (id) => {
    const arrAccount = await conta.getAccount(id);

    return arrAccount.map((item) => ({
        CodCliente: item.id,
        Saldo: item.saldo,
    }));
};


module.exports = { getAccountById };
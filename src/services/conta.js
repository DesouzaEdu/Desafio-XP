const conta = require('../models/conta');

const getAccountById = async (id) => {
    const arrAccount = await conta.getAccount(id);

    return arrAccount.map((item) => ({
        CodCliente: item.id,
        Saldo: item.saldo,
    }));
};

const deposit = async ({CodCliente: id, valor}) => {
    const [account] = await conta.getAccount(id);
    const { saldo: saldoAtual } = account;
    const saldo = parseInt(saldoAtual, 10) + valor;
    console.log(saldoAtual);
    conta.updateBalance(saldo, id);
    return { status: 200 };
};

const withdraw = async ({CodCliente: id, valor}, res) => {
    const [account] = await conta.getAccount(id);
    let { saldo: saldoAtual } = account;
    saldoAtual = parseInt(saldoAtual, 10);
    if (valor > saldoAtual) {
        throw res.status(422)
        .json({ message: 'A quantidade a ser sacada não pode ser maior do que o saldo da conta'});
    }
    const saldo = saldoAtual - valor;
    conta.updateBalance(saldo, id);
    return { status: 200 };
};

module.exports = { getAccountById, deposit, withdraw };
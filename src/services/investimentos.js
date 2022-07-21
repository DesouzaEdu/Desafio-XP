const investment = require('../models/investimentos');

const buyInvestment = async ({ codCliente, codAtivo, qtdeAtivo }, res) => {
    const [ objAtivo ] = await investment.getInvestedAsset(codAtivo);    
    const { quantidade_disponivel: qtdDisponivel, valor } = objAtivo;
    if (qtdeAtivo > qtdDisponivel) {
      throw res.status(422)
        .json({ message: 'A quantidade do ativo comprada deve ser menor do que a disponível no mercado'});
    };
    const hasAsset = await investment.hasThisAsset(codCliente, codAtivo);
    if (hasAsset.length === 0) {
      investment.addWallet(qtdeAtivo, codCliente, codAtivo);
      return { status: 201 };
    }    
    const saldo = hasAsset[0].quantidade + qtdeAtivo;
    investment.updateWallet(saldo, codCliente, codAtivo);
    return { status: 200 };
};

const sellInvestment = async ({ codCliente, codAtivo, qtdeAtivo }, res) => {
    const [ asset ] = await investment.hasThisAsset(codCliente, codAtivo);
    if ( asset && qtdeAtivo > asset.quantidade) {
      throw res.status(422)
        .json({ message: 'A quantidade vendida não pode ser maior do que a quantidade que voce possui'});
    };
    console.log(asset);
    const saldo = asset.quantidade - qtdeAtivo;
    if (saldo === 0) {
      investment.deleteWallet(codCliente, codAtivo);
      return { status: 204 };
    }
    investment.updateWallet(saldo, codCliente, codAtivo);
    return { status: 200 };
};


module.exports = { buyInvestment, sellInvestment };
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
    investment.updateWallet(qtdeAtivo, codCliente, codAtivo);
    return { status: 200 };
};


module.exports = { buyInvestment };
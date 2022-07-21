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
      return investment.addWallet(qtdeAtivo, codCliente, codAtivo);
    }
    return investment.updateWallet(qtdeAtivo, codCliente, codAtivo);
};


module.exports = { buyInvestment };
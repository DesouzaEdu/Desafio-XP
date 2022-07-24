const investment = require('../models/investimentos');
const asset = require('../models/ativos');
const account = require('../models/conta');

const updateAssetService = async (quantity, id, operation) => {
  const [{quantidade_disponivel: actualQuantity}] = await asset.getAssets(id);
  const assetBalance = operation ? actualQuantity + quantity : actualQuantity - quantity;
  await investment.updateAsset(assetBalance, id);
};

const hasBalance = async (accountId, assetId, buyQuantity ) => {
  const [{saldo}] = await account.getAccount(accountId);
  const [{valor}] = await investment.getInvestedAsset(assetId);
  const amount = valor * buyQuantity;
  if ( parseFloat(saldo) < amount) {
    return false
  };
  return true;
}

const setBalance = async (accountId, assetId, buyQuantity, operation ) => {
  let [{saldo}] = await account.getAccount(accountId);
  const [{valor}] = await investment.getInvestedAsset(assetId);
  saldo = parseFloat(saldo);
  const amount = valor * buyQuantity;
  let newBalance = saldo + amount;
  if(operation === 'buy') newBalance = saldo - amount;
  await account.updateBalance(newBalance, accountId);
} 

const buyInvestment = async ({ codCliente, codAtivo, qtdeAtivo }) => {
    const [ objAtivo ] = await investment.getInvestedAsset(codAtivo);    
    const { quantidade_disponivel: qtdDisponivel, valor } = objAtivo;
    if (qtdeAtivo > qtdDisponivel) {
      return { status: 422, message: 'A quantidade do ativo comprada deve ser menor do que a disponível no mercado'};
    };
    const boolHasBalance = await hasBalance(codCliente, codAtivo, qtdeAtivo);
    if (!boolHasBalance) {
      return { status: 422, message: 'Você não possui saldo suficiente para efetuar essa compra!'};
    }
    const hasAsset = await investment.hasThisAsset(codCliente, codAtivo);
    if (hasAsset.length === 0) {
      investment.addWallet(qtdeAtivo, codCliente, codAtivo);
      return { status: 201 };
    }    
    const saldo = hasAsset[0].quantidade + qtdeAtivo;
    await updateAssetService(qtdeAtivo, codAtivo, false);
    await setBalance(codCliente, codAtivo, qtdeAtivo, 'buy');
    await investment.updateWallet(saldo, codCliente, codAtivo);
    return { status: 200 };
};

const sellInvestment = async ({ codCliente, codAtivo, qtdeAtivo }) => {
    const [ asset ] = await investment.hasThisAsset(codCliente, codAtivo);
    if ( !asset || qtdeAtivo > asset.quantidade) {
      return { status: 422, message: 'A quantidade vendida não pode ser maior do que a quantidade que voce possui'};
    };
    const saldo = asset.quantidade - qtdeAtivo;
    if (saldo === 0) {
      investment.deleteWallet(codCliente, codAtivo);
      return { status: 204 };
    }
    await investment.updateWallet(saldo, codCliente, codAtivo);
    await updateAssetService(qtdeAtivo, codAtivo, true);
    await setBalance(codCliente, codAtivo, qtdeAtivo, 'sell');
    return { status: 200 };
};


module.exports = { buyInvestment, sellInvestment };
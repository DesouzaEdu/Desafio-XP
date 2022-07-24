const assets = require('../services/ativos');

const validateCodAtivo = async (req, res, next) => {
    const { codAtivo } = req.body;  
    if (!codAtivo) return res.status(400).json({ message: '"codCliente" is required' });
    if (typeof codAtivo !== 'number' ) {
      return res.status(422).json({ message: 'o valor de "codCliente" deve ser númerico' });
    }
    const assetExists = await assets.getAssetsById(codAtivo);
    if (assetExists.length === 0) return res.status(422).json({ message: '"codAtivo" inválido' });
    next();
  };

  module.exports = validateCodAtivo;
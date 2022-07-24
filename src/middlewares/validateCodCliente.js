const account = require('../services/conta');

const validateCodCliente = async (req, res, next) => {
    const { codCliente } = req.body;
    if (!codCliente) return res.status(400).json({ message: '"codCliente" is required' });
    if (typeof codCliente !== 'number' ) {
      return res.status(422).json({ message: 'o valor de "codCliente" deve ser númerico' });
    }
    const clientExists = await account.getAccountById(codCliente);
    if (clientExists.length === 0) return res.status(422).json({ message: '"codCliente" inválido' });
    next();
  };

  module.exports = validateCodCliente;
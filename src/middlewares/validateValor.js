const validateValor = (req, res, next) => {
    const { valor } = req.body;  
    if (!valor) return res.status(400).json({ message: '"valor" is required' });
    if (valor <= 0 ) {
      return res.status(422).json({ message: 'o valor não pode ser negativo ou igual a zero' });
    }
    next();
  };

  module.exports = validateValor;
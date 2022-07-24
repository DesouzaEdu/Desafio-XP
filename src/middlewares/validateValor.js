const validateValor = (req, res, next) => {
    const { valor } = req.body;  
    if (!valor) return res.status(400).json({ message: '"valor" is required' });
    if (valor <= 0 ) {
      return res.status(422).json({ message: 'a quantidade depositada não pode ser negativa ou igual a zero' });
    }
    next();
  };

  module.exports = validateValor;
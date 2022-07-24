const validateLogin = (req, res, next) => {
    const { usuario, senha } = req.body;

    if (!usuario || !senha) {
      return res.status(400).json({message: 'Algum campo necessário está faltando' });
    }
  
    next();
  };
  
  module.exports = validateLogin;
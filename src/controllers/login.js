const express = require('express');

const loginService = require('../services/login');

const loginRouter = express.Router();

const validateLogin = require('../middlewares/validateLogin');

loginRouter.post('/', validateLogin, async (req, res) => {
  const hasToken = await loginService.authentication(req.body, res);
  if (!hasToken) {
    return res.status(400).json({ message: 'usuário ou senha inválidos' });
  }
  return res.status(200).json(hasToken);
});

module.exports = loginRouter;
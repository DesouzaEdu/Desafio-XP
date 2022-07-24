const JWToken = require('../helpers/JWToken');

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  const payload = JWToken.isAauthenticatedToken(token);
  if (payload.message) return res.status(payload.status).json({message: payload.message});
  next();
};

module.exports = { validateToken };
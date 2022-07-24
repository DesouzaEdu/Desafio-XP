const jwt = require('jsonwebtoken');

require('dotenv');

const SECRET = process.env.JWT_SECRET || 'Eduard@1';

const generateJWToken = (payload) => jwt.sign(payload, SECRET);

const isAauthenticatedToken = (token, res) => {
    if (!token) {
      throw nErro({ status: 401, message: 'Token not found' }, res);
    }
    try {
      const validate = jwt.verify(token, SECRET); 
      return validate;
    } catch (e) {    
      throw nErro({ status: 401, message: 'Expired or invalid token' }, res);
    }
  };

module.exports = { generateJWToken, isAauthenticatedToken };
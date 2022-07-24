const { generateJWToken } = require('../helpers/JWToken');
const login = require('../models/login');

const authentication = async ({usuario, senha}) => {
    const user = await login.getUser(usuario, senha);
    if (user.length === 0){
        return false;
    }
    const token = generateJWToken(user[0]);
    return { token };
};

module.exports = { authentication };
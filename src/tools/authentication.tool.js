require('dotenv').config();
const jwt = require("jsonwebtoken");

const SECRETss = process.env.SECRET;

const SECRET = 'meu saequenbck';
const CONFIG = { expiresIn: "1d", algorithm: "HS256" };

const createToken = (data) => jwt.sign({data}, SECRET, CONFIG);

const verifyToken = (token) => {
  const user = jwt.verify(token, SECRET);
  return user.data;
};

module.exports = {
  createToken,
  verifyToken,
};

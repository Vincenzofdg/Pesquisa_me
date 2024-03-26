const { login: model } = require('../models');
const { login: validation } = require('../validations');

const { authentication } = require('../tools')

const reject = {
    status: 401,
    msg: 'senha ou email invalidos'
}

module.exports = {
    clientAcess: async (data) => {
        const validated = await validation(data);
        
        const client = await model.clientAcess(validated);
        
        if (!client || client === undefined) return reject;

        const token = authentication.createToken(client);

        return {
            status: 200, 
            result: {
                id: client.id,
                name: client.name,
                token,
            }
        }
    },
    mainAcess: async (data) => {
        const validated = await validation(data);
        
        const client = await model.mainAcess(validated);
        
        if (!client || client === undefined) return reject;

        const token = authentication.createToken(client);

        return {
            status: 200, 
            result: {
                id: client.id,
                name: client.name,
                token,
            }
        }
    }
}
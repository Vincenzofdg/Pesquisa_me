const { client: model } = require('../models');

module.exports = {
    getAll: async () => {
        const result = await model.getAll();
        return {status: 200, result};
    },
    getById: async (id) => {
        const result = await model.getById(id);
        return {status: 200, result};
    },
    createClient: async (user, name, password) => {
        const result = await model.createClient(user, name, password);
        return {status: !result ? 400 : 201};
    },
};
const { searchHistory: model } = require('../models');

module.exports = {
    getAll: async () => {;
        const result = await model.getAll();
        return {status: 200, result};
    },
    getByClientId: async (clientId) => {;
        const result = await model.getByClientId(clientId);
        return {status: 200, result};
    }
};
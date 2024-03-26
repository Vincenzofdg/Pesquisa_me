const { search: model } = require('../models');

module.exports = {
    getAll: async () => {;
        const result = await model.getAll();
        return {status: 200, result};
    },
    getById: async (id) => {;
        const result = await model.getById(id);
        return {status: 200, result};
    },
    getByClientId: async (clientId) => {;
        const result = await model.getByClientId(clientId);
        return {status: 200, result};
    },
    createSearch: async (data) => {;
        const { client, intro, questions } = data;
        const result = await model.createSearch(client, intro, questions);
        return {status: 200, result};
    }
};
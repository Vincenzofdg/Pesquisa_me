const { search: model } = require('../models');

module.exports = {
    getAll: async () => {;
        const result = await model.getAll();
        return {status: 200, result};
    },
    createSearch: async (data) => {;
        const { client, intro, questions } = data;
        const result = await model.createSearch(client, intro, questions);
        return {status: 200, result};
    },
};
const { question: model } = require('../models');

module.exports = {
    getById: async (id) => {;
        const result = await model.getById(id);
        return {status: 200, result};
    },
};
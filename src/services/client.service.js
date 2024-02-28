const { client: model } = require('../models');

module.exports = {
    getAll: async () => {
        const result = await model.getAll();
        return {status: 200, result};
    }
};
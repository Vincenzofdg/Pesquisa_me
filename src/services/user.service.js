const { user: model } = require('../models');

module.exports = {
    getById: async (userId) => {
        const result = await model.getById(userId);
        return {status: 200, result};
    },
};
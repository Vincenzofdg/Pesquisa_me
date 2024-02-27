const { user: model } = require('../models');

module.exports = {
    getOverview: async (userId) => {
        const result = await model.getOverview(userId);
        return {status: 200, result};
    },
};
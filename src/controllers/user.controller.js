const { user: service } = require('../services');

module.exports = {
    getOverview: async (req, res, _next) => {
        const userId = req.params.id;
        const {status, result} = await service.getOverview(userId);
        return res.status(status).json(result);
    },
};

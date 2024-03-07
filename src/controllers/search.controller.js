const { search: service } = require('../services');

module.exports = {
    getAll: async (_req, res, _next) => {
        const {status, result} = await service.getAll();
        return res.status(status).json(result);
    },
    createSearch: async (req, res, _next) => {
        const bigData = req.body;
        const {status, result} = await service.createSearch(bigData);
        return res.status(status).json(result);
    }
};
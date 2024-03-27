const { searchHistory: service } = require('../services');

module.exports = {
    getAll: async (_req, res, _next) => {
        const {status, result} = await service.getAll();
        return res.status(status).json(result);
    },
    getByClientId: async (req, res, _next) => {
        const clientId = req.params.clientId;
        const {status, result} = await service.getByClientId(clientId);
        return res.status(status).json(result);
    }
};
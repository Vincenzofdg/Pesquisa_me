const { search: service } = require('../services');

module.exports = {
    getAll: async (_req, res, _next) => {
        const {status, result} = await service.getAll();
        return res.status(status).json(result);
    },
    getById: async (req, res, _next) => {
        const id = req.params.id;
        const {status, result} = await service.getById(id);
        return res.status(status).json(result);
    },
    getByClientId: async (req, res, _next) => {
        const clientId = req.params.clientId;
        const {status, result} = await service.getByClientId(clientId);
        return res.status(status).json(result);
    },
    createSearch: async (req, res, _next) => {
        const bigData = req.body;
        const {status, result} = await service.createSearch(bigData);
        return res.status(status).json(result);
    }
};
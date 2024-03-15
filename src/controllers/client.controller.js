const { client: service } = require('../services');

module.exports = {
    getAll: async (_req, res, _next) => {
        const {status, result} = await service.getAll();
        return res.status(status).json(result);
    },
    getById: async (req, res, _next) => {
        const { id } = req.params;
        const {status, result} = await service.getById(id);
        return res.status(status).json(result);
    },
    createClient: async (req, res, _next) => {
        const { user, name, password } = req.body;
        const { status } = await service.createClient(user, name, password);
        return res.sendStatus(status);
    },
};

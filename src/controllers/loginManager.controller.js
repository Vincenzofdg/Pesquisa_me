const { loginManager: service } = require('../services');

module.exports = {
    clientAcess: async (req, res, _next) => {
        const data = req.body;
        const {status, result} = await service.clientAcess(data);
        return res.status(status).json(result);
    }
};
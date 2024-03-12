const { searchAnswer: service } = require('../services');

module.exports = {
    create: async (req, res, _next) => {
        const data = req.body;
        const {status, result} = await service.create(data);
        return res.status(status).json(result);
    }
};
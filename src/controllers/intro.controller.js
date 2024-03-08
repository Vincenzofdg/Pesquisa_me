const { intro: service } = require('../services');

module.exports = {
    getById: async (req, res, _next) => {
        const { id } = req.params
        const {status, result} = await service.getById(id);
        return res.status(status).json(result);
    },
};
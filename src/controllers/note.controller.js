const { note: service } = require('../services');

module.exports = {
    getAll: async (_req, res, _next) => {
        const {status, result} = await service.getAll();
        return res.status(status).json(result);
    },
    getByUserId: async (req, res, _next) => {
        const { id } = req.params;
        const {status, result} = await service.getByUserId(id);
        return res.status(status).json(result);
    },
    createNote: async (req, res, _next) => {
        const { userId, note } = req.body;
        const { status } = await service.createNote(userId, note);
        return res.sendStatus(status);
    },
    updateNote: async (req, res, _next) => {
        const { noteId, note } = req.body;
        const { status } = await service.updateNote(noteId, note);
        return res.sendStatus(status);
    },
    destroyNote: async (req, res, _next) => {
        const { noteId } = req.body;
        const { status } = await service.destroyNote(noteId);
        return res.sendStatus(status);
    },
};

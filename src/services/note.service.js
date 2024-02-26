const { note: model } = require('../models');

module.exports = {
    getAll: async () => {
        const result = await model.getAll();
        return {status: 200, result};
    },
    getByUserId: async (userId) => {
        const result = await model.getByUserId(userId);
        return {status: 200, result};
    },
    createNote: async (userId, note) => {
        const result = await model.createNote(userId, note);
        return {status: !result ? 400 : 201};
    },
    updateNote: async (noteId, note) => {
        const result = await model.updateNote(noteId, note);
        return {status: !result ? 400 : 200};
    },
    destroyNote: async (noteId) => {
        const result = await model.destroyNote(noteId);
        return {status: !result ? 400 : 200};
    },
};
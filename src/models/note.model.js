const connection = require('./connection');

module.exports = {
   getAll: async () => {
      const query = `
         SELECT 
            users.name AS user,
            note,
            DATE_FORMAT(CONVERT_TZ(created_at, "+00:00", "-03:00"), "%H:%i:%s %d-%m-%Y") AS created,
            DATE_FORMAT(CONVERT_TZ(updated_at, "+00:00", "-03:00"), "%H:%i:%s %d-%m-%Y") AS updated
         FROM user_notes
         INNER JOIN
            users ON user_notes.user_id = users.id;
      `;
      const [result] = await connection.execute(query);
      if (result.length === 0) return [];
      return result;
   },
   getByUserId: async (userId) => {
      const query = `
         SELECT 
            id,
            note,
            DATE_FORMAT(CONVERT_TZ(created_at, "+00:00", "-03:00"), "%H:%i:%s %d-%m-%Y") AS created,
            DATE_FORMAT(CONVERT_TZ(updated_at, "+00:00", "-03:00"), "%H:%i:%s %d-%m-%Y") AS updated
         FROM user_notes 
            WHERE user_id = ?;
         `;
      const [result] = await connection.execute(query, [userId]);
      if (result.length === 0) return [];
      return result;
   },
   createNote: async (userId, note) => {
      const query = 'INSERT INTO user_notes (user_id, note) VALUES (?, ?);';
      const [result] = await connection.execute(query, [userId, note]);
      if (result.affectedRows === 0) return false;
      return true;
   },
   updateNote: async (noteID, note) => {
      const query = `
         UPDATE user_notes
         SET
            note = ?,
            updated_at = CURRENT_TIMESTAMP
         WHERE
            id = ?;
      `;
      const [result] = await connection.execute(query, [note, noteID]);
      if (result.affectedRows === 0) return false;
      return result.info;
   },
   destroyNote: async (noteId) => {
      const query = 'DELETE FROM user_notes WHERE id = ?;';
      const [result] = await connection.execute(query, [noteId]);
      // if (result.affectedRows === 0) return false;
      // return true;

      if (result.affectedRows === 0) return false;
      return true;
   },
};
const connection = require('./connection');

module.exports = {
     getAll: async () => {
          const query = 'SELECT * FROM clients;';
          const [result] = await connection.execute(query);
          return result;
     },
     createClient: async (user, name, password) => {
          const query = 'INSERT INTO clients (user, name, password) VALUES (?, ?, ?);';
          const [result] = await connection.execute(query, [user, name, password]);
          if (result.affectedRows === 0) return false;
          return true;
     },
};
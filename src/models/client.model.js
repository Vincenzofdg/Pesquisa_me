const connection = require('./connection');

module.exports = {
     getAll: async () => {
          const query = 'SELECT * FROM clients;';
          const [result] = await connection.execute(query);
          return result;
     },
     getById: async (id) => {
          console.log(id)
          const query = 'SELECT * FROM clients WHERE id = ?;';
          const [result] = await connection.execute(query, [id]);
          return result[0];
     },
     createClient: async (user, name, password) => {
          const query = 'INSERT INTO clients (user, name, password) VALUES (?, ?, ?);';
          const [result] = await connection.execute(query, [user, name, password]);
          if (result.affectedRows === 0) return false;
          return true;
     },
};
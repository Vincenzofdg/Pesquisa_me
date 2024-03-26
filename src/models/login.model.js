const connection = require('./connection');

module.exports = {
     clientAcess: async (data) => {
          const { username, password } = data;
          const query = 'SELECT * FROM users WHERE user = ? AND password = ?;';
          const [result] = await connection.execute(query, [username, password]);
          return result[0];
     },
     mainAcess: async (data) => {
          const { username, password } = data;
          const query = 'SELECT * FROM clients WHERE user = ? AND password = ?;';
          const [result] = await connection.execute(query, [username, password]);
          return result[0];
     }
};
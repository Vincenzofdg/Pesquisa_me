const connection = require('./connection');

module.exports = {
     getAll: async () => {
          const query = 'SELECT * FROM clients;';
          const [result] = await connection.execute(query);
          return result[0];
     }
};
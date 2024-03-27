const connection = require('./connection');

module.exports = {
   getAll: async () => {
      const query = "SELECT * FROM search_history";
      const [result] = await connection.execute(query);
      return result;
   },
   getByClientId: async (clientId) => {
      const query = "SELECT * FROM search_history WHERE client_id = ?";
      const [result] = await connection.execute(query, [clientId]);
      return result;
   }
};

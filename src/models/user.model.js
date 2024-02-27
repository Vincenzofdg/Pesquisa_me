const connection = require('./connection');

module.exports = {
   getOverview: async (userId) => {
      const query = `
         SELECT
            clients.name AS client_id,
            search_id,
            qtd_done,
            qtd_goal
         FROM user_searches
         INNER JOIN
            clients ON user_searches.client_id = clients.id
         WHERE user_id = ?;
      `;
      const [result] = await connection.execute(query, [userId]);
      if (result.length === 0) return [];
      return result;
   },
};
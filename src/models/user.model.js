const connection = require('./connection');

module.exports = {
   getById: async (userId) => {
      const query = "SELECT search_id as search, qtd_done as done, qtd_goal as goal FROM user_searches WHERE user_id = ?";
      const [result] = await connection.execute(query, [userId]);
      if (result.length === 0) return [];
      return result;
   },
};
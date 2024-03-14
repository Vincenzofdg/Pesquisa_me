const connection = require('./connection');

module.exports = {
     create: async (clientId, blockName, answer, userId, searchId) => {
          try {
               const placeholders = Array(answer.length).fill('(?, ?, ?, ?, ?, ?)').join(', ');
             
               const query = `
                 INSERT INTO search_answers 
                   (client_id, search_id, question_id, section, answer_collected, user_id)
                 VALUES 
                   ${placeholders};
               `;
             
               const values = answer.flatMap(cur => [clientId, searchId, cur.questionId, blockName, cur.text, userId]);
             
               const [result] = await connection.execute(query, values);

               if (result.affectedRows !== answer.length) {
                    return { msg: "Problems to save search" }
               };

               if (blockName === "question") {
                    const queryStatus = "SELECT qtd_done, qtd_goal FROM user_searches WHERE user_id = ? AND search_id = ?;";
                    const [result] = await connection.execute(queryStatus, [userId, searchId]);
                    
                    const { qtd_goal, qtd_done } = result[0];

                    if (qtd_done >= qtd_goal) return;

                    const updateStatusQuery = "UPDATE user_searches SET qtd_done = ? WHERE user_id = ? AND search_id = ?;";
                    await connection.execute(updateStatusQuery, [qtd_done + 1, userId, searchId]);
               };

                 
               return { msg: "Search Registered" }
             
             } catch (error) {
               console.error("Erro ao executar consulta:", error);
             }
     }
}
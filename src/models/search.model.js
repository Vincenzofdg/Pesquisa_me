const connection = require('./connection');

module.exports = {
   getAll: async () => {
      const query = "SELECT * FROM searches";
      const [result] = await connection.execute(query);
      return result;
   },
   getById: async (id) => {
      const query = "SELECT * FROM searches WHERE id = ?";
      const [result] = await connection.execute(query, [id]);
      return result[0];
   },
   createSearch: async (client, intro, questions) => {
      const { clientId, meta, qtdUsers, total } = client;
      const ids = { intro: [], question: [], sections: [] };

      const createQuestion = async (data, idType) => {
         const { question, answer, type } = data;
         const questionQuery = 'INSERT INTO question_blocks (client, question, answer, answer_type) VALUES (?, ?, ?, ?);';
         const [result] = await connection.execute(questionQuery, [clientId, question, answer, type]);
         ids[idType].push(result.insertId);
      };

      const insertQuestionsSequentially = async (items, idType) => {
         for (const item of items) {
            await createQuestion(item, idType);
         }
      };

      const buldDinamicQuery = (type) => {
         const sections = ids[type].map((_, index) => `section_${index + 1 < 10 ? "0" + (index + 1) : index + 1}`).join(', ');
         const placeholders = Array(ids[type].length + 1).fill('?').join(', ');
         const query = `
             INSERT INTO ${type === 'intro' ? "introduction_sections" : "search_sections"}
             (client_id, ${sections})
             VALUES
             (${placeholders})
         `;
         return query;
     }

      // Create questions and save it`s ids on const ids
      await insertQuestionsSequentially(intro, 'intro');
      await insertQuestionsSequentially(questions, 'question');
   
      // Creating Section
      // Intro
      const sectionIntroQuery = buldDinamicQuery('intro');
      const [sIntro] = await connection.execute(sectionIntroQuery, [clientId, ...ids.intro]);
      ids.sections.push(sIntro.insertId);
      // Main
      const sectionQuestionsQuery = buldDinamicQuery('question');
      const [sQuestion] = await connection.execute(sectionQuestionsQuery, [clientId, ...ids.question]);
      ids.sections.push(sQuestion.insertId);

      // Creating Search
      const searchQuery = 'INSERT INTO searches (client_id, introduction, search, qtd_users, users_meta, total) VALUES (?, ?, ?, ?, ?, ?);';
      const [ result ] = await connection.execute(searchQuery, [clientId, ...ids.sections, qtdUsers, meta, total]);

      // Binding to Users result.insertId
      const bindingUsers = async (ids) => {
         for (const id of ids) {
            await connection.execute(
               "INSERT INTO user_searches (user_id, search_id, qtd_done, qtd_goal) VALUES (?, ?, ?, ?);",
               [
                  id, result.insertId, 0, meta
               ]);
         }
      };

      const [allUsers] = await connection.execute("SELECT id FROM users");
      const usersIds = allUsers.reduce((acc, cur) => {
         acc.push(cur.id)
         return acc
      }, []);

      await bindingUsers(usersIds);

      if (result.affectedRows !== 1) {
         return { msg: "Problems to create search" }
      }
      
      return { msg: "Search created" }
   }
};

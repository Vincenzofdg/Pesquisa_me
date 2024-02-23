const connection = require('./connection');

module.exports = {
     getAll: async () => {
          const query = `
              SELECT
                    clients.name AS client_id,
                    JSON_OBJECT(
                         'q01', s1.question_01,
                         'q02', s1.question_02,
                         'q03', s1.question_03,
                         'q04', s1.question_04,
                         'q05', s1.question_05,
                         'q06', s1.question_06,
                         'q07', s1.question_07
                    ) AS section_01,
                    JSON_OBJECT(
                         'q01', s2.question_01,
                         'q02', s2.question_02,
                         'q03', s2.question_03,
                         'q04', s2.question_04,
                         'q05', s2.question_05,
                         'q06', s2.question_06,
                         'q07', s2.question_07
                    ) AS section_02,
                    JSON_OBJECT(
                         'q01', s3.question_01,
                         'q02', s3.question_02,
                         'q03', s3.question_03,
                         'q04', s3.question_04,
                         'q05', s3.question_05,
                         'q06', s3.question_06,
                         'q07', s3.question_07
                    ) AS section_03,
                    JSON_OBJECT(
                         'q01', s4.question_01,
                         'q02', s4.question_02,
                         'q03', s4.question_03,
                         'q04', s4.question_04,
                         'q05', s4.question_05,
                         'q06', s4.question_06,
                         'q07', s4.question_07
                    ) AS section_04,
                    JSON_OBJECT(
                         'q01', s5.question_01,
                         'q02', s5.question_02,
                         'q03', s5.question_03,
                         'q04', s5.question_04,
                         'q05', s5.question_05,
                         'q06', s5.question_06,
                         'q07', s5.question_07
                    ) AS section_05,
                    JSON_OBJECT(
                         'q01', s6.question_01,
                         'q02', s6.question_02,
                         'q03', s6.question_03,
                         'q04', s6.question_04,
                         'q05', s6.question_05,
                         'q06', s6.question_06,
                         'q07', s6.question_07
                    ) AS section_06,
                    JSON_OBJECT(
                         'q01', s7.question_01,
                         'q02', s7.question_02,
                         'q03', s7.question_03,
                         'q04', s7.question_04,
                         'q05', s7.question_05,
                         'q06', s7.question_06,
                         'q07', s7.question_07
                    ) AS section_07
               FROM
                  searches
               INNER JOIN
                  clients ON searches.client_id = clients.id
               INNER JOIN
                  search_blocks_content s1 ON searches.section_01 = s1.search_blocks_id
               INNER JOIN
                  search_blocks_content s2 ON searches.section_02 = s2.search_blocks_id
               INNER JOIN
                  search_blocks_content s3 ON searches.section_03 = s3.search_blocks_id
               INNER JOIN
                  search_blocks_content s4 ON searches.section_04 = s4.search_blocks_id
               INNER JOIN
                  search_blocks_content s5 ON searches.section_05 = s5.search_blocks_id
               INNER JOIN
                  search_blocks_content s6 ON searches.section_06 = s6.search_blocks_id
               INNER JOIN
                  search_blocks_content s7 ON searches.section_07 = s7.search_blocks_id;
          `;
        
          const [result] = await connection.execute(query);
      
          const parsedResult = result.map(row => {
              row.section_01 = JSON.parse(row.section_01);
              row.section_02 = JSON.parse(row.section_02);
              row.section_03 = JSON.parse(row.section_03);
              row.section_04 = JSON.parse(row.section_04);
              row.section_05 = JSON.parse(row.section_05);
              row.section_06 = JSON.parse(row.section_06);
              row.section_07 = JSON.parse(row.section_07);
              return row;
          });
      
          return parsedResult;
      },
      
      
      
};
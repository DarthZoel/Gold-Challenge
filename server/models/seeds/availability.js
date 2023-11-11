/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('availability').del();

  // Inserts seed entries
  await knex('availability').insert([
    {
      field_id: 1, // ganti dengan field_id yang sesuai
      start_time: '2023-11-01 08:00:00',
      end_time: '2023-11-01 12:00:00',
    },
    {
      field_id: 2, // ganti dengan field_id yang sesuai
      start_time: '2023-11-02 09:00:00',
      end_time: '2023-11-02 13:00:00',
    }
    // Tambahkan entri lain sesuai kebutuhan
  ]);
};

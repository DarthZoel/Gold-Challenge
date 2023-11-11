/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('bookings').del();

  // Inserts seed entries
  await knex('bookings').insert([
    {
      user_id: 1, // ganti dengan user_id yang sesuai
      field_id: 1, // ganti dengan field_id yang sesuai
      start_time: '2023-11-01 10:00:00',
      end_time: '2023-11-01 12:00:00',
      total_price: 350_000.00,
      booking_date: '2023-11-01',
      created_at: new Date()
    },
    {
      user_id: 2, // ganti dengan user_id yang sesuai
      field_id: 2, // ganti dengan field_id yang sesuai
      start_time: '2023-11-02 14:00:00',
      end_time: '2023-11-02 15:00:00',
      total_price: 300_000.00,
      booking_date: '2023-11-02',
      created_at: new Date()
    }
  ]);
};
